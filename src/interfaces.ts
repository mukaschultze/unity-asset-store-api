
export interface Period {
    value: string;
    name: string;
}

export interface SalesPeriodsResponse {
    periods: Period[];
}

export interface Result {
    net: string;
    short_url: string;
}

export interface SalesResponse {
    aaData: string[][];
    result: Result[];
}

export interface Result2 {
    short_url: string;
}

export interface DownloadsResponse {
    aaData: string[][];
    result: Result2[];
}

export interface Address {
    lock_address_fields: boolean;
    country: string;
    firstname: string;
    country_name: string;
    lastname: string;
    phone?: any;
    state?: any;
    address2?: any;
    email: string;
    zip: string;
    city: string;
    address: string;
    vat_no?: any;
    organization?: any;
}

export interface Publisher {
    email: string;
    id: string;
    label: string;
}

export interface Keyimage {
    large: string;
    small: string;
    icon: string;
    icon24: string;
    medium: string;
}

export interface Balance {
    currency: string;
    amount: string;
    amount_text: string;
}

export interface UserOverviewResponse {
    downloader: boolean;
    language_code: string;
    currency: string;
    email: string;
    v2editor_allowed: boolean;
    has_accepted_latest_terms: boolean;
    himself: boolean;
    id: string;
    address: Address;
    publisher: Publisher;
    bio: string;
    name: string;
    keyimage: Keyimage;
    balance: Balance;
    editable: boolean;
    v2editor_preferred: boolean;
    v2_preferred: boolean;
}

export interface Kategory {
    name: string;
    slug: string;
    id: string;
}

export interface Category {
    label_english: string;
    multiple: string;
    id: string;
    label: string;
}

export interface Publisher2 {
    label_english: string;
    slug: string;
    url: string;
    id: string;
    label: string;
    support_email: string;
    support_url?: any;
}

export interface List {
    name: string;
    slug_v2: string;
    slug: string;
    overlay?: any;
}

export interface Link {
    id: string;
    type: string;
}

// tslint:disable-next-line: no-empty-interface
export interface Flags {
}

export interface Keyimage2 {
    icon: string;
    icon75: string;
    icon25: string;
}

export interface Latest {
    icon: string;
    pubdate: string;
    status: string;
    kategory: Kategory;
    package_version_id: string;
    slug: string;
    id: string;
    category: Category;
    publisher: Publisher2;
    list: List[];
    link: Link;
    flags: Flags;
    version: string;
    keyimage: Keyimage2;
    license: number;
    title_english: string;
    title: string;
}

export interface Keyimage3 {
    small: string;
    big: string;
}

export interface Rating {
    count: number;
    average: number;
}

export interface Overview {
    organization_id: string;
    latest: Latest;
    services: boolean;
    name: string;
    keyimage: Keyimage3;
    support_email: string;
    description: string;
    rating: Rating;
    payout_cut: string;
    url: string;
    id: string;
    short_url: string;
    support_url?: any;
}

export interface PublisherOverviewResponse {
    overview: Overview;
}

export interface Version {
    status: string;
    name: string;
    package_id: string;
    modified: string;
    size: string;
    created: string;
    published: string;
    version_name: string;
    category_id: string;
    package_version_id: string;
    publishnotes: string;
    id: string;
    price: string;
}

export interface Package {
    versions: Version[];
    category_id: string;
    management_flags: string;
    name: string;
    id: string;
    short_url: string;
}

export interface PackagesResponse {
    packages: Package[];
    publisher_name: string;
    terms_current: string;
    terms_accepted: string;
    publisher_id: string;
}

export interface VerifyInvoiceResponse {
    aaData: string[][];
}

export interface RevenueResponse {
    aaData: string[][];
}

export interface ApiKeyResponse {
    api_key: string;
}
