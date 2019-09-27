import request from "request-promise-native";
import { ApiKeyResponse, DownloadsResponse, PackagesResponse, PublisherOverviewResponse, RevenueResponse, SalesPeriodsResponse, SalesResponse, UserOverviewResponse, VerifyInvoiceResponse } from "./interfaces.js";

function pad(num: number | string, size: number, padChar: string = "0"): string {
    let s = String(num);
    while (s.length < (size || 2)) { s = padChar + s; }
    return s;
}

export default class AssetStoreClient {

    constructor(private token: string, private publisherID?: number, private config?: request.RequestPromiseOptions) { }

    public async logout() {
        return await this.assetStoreRequestJSON<any>(
            `https://publisher.assetstore.unity3d.com/logout`,
        );
    }

    public async salesInterface() {
        return await this.assetStoreRequestJSON<any>(
            `https://publisher.assetstore.unity3d.com/sales.html`,
        );
    }

    public async userOverview() {
        return await this.assetStoreRequestJSON<UserOverviewResponse>(
            `https://publisher.assetstore.unity3d.com/api/user/overview.json`,
        );
    }

    public async publisherOverview() {
        return await this.assetStoreRequestJSON<PublisherOverviewResponse>(
            `https://publisher.assetstore.unity3d.com/api/publisher/overview.json`,
        );
    }

    public async salesPeriods(publisherID?: number) {
        return await this.assetStoreRequestJSON<SalesPeriodsResponse>(
            `https://publisher.assetstore.unity3d.com/api/publisher-info/months/${this.getID(publisherID)}.json`,
        );
    }

    public async sales(year: number, month: number, publisherID?: number) {
        return await this.assetStoreRequestJSON<SalesResponse>(
            `https://publisher.assetstore.unity3d.com/api/publisher-info/sales/${this.getID(publisherID)}/${pad(year * 100 + month, 6)}.json`,
        );
    }

    public async downloads(year: number, month: number, publisherID?: number) {
        return await this.assetStoreRequestJSON<DownloadsResponse>(
            `https://publisher.assetstore.unity3d.com/api/publisher-info/downloads/${this.getID(publisherID)}/${pad(year * 100 + month, 6)}.json`,
        );
    }

    public async verifyInvoice(invoice: string, publisherID?: number) {
        return await this.assetStoreRequestJSON<VerifyInvoiceResponse>(
            `https://publisher.assetstore.unity3d.com/api/publisher-info/verify-invoice/${this.getID(publisherID)}/${invoice}.json`,
        );
    }

    public async revenue(publisherID?: number) {
        return await this.assetStoreRequestJSON<RevenueResponse>(
            `https://publisher.assetstore.unity3d.com/api/publisher-info/revenue/${this.getID(publisherID)}.json`,
        );
    }

    public async packages() {
        return await this.assetStoreRequestJSON<PackagesResponse>(
            `https://publisher.assetstore.unity3d.com/api/management/packages.json`,
        );
    }

    public async apiKey(publisherID?: number) {
        return await this.assetStoreRequestJSON<ApiKeyResponse>(
            `https://publisher.assetstore.unity3d.com/api/publisher-info/api-key/${this.getID(publisherID)}.json`,
        );
    }

    private async assetStoreRequestJSON<T>(url: string) {

        const jar = request.jar(false);
        const req: request.RequestPromiseOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            jar,
            ...(this.config || {}),
        };

        jar.setCookie(`kharma_session=${this.token}`, url);

        const response = await request(url, req);
        const obj = JSON.parse(response) as T;

        return obj;

    }

    private getID(publisherID?: number) {
        if (publisherID || this.publisherID) {
            return publisherID || this.publisherID;
        }
        throw new Error("No publisher ID specified");
    }

}
