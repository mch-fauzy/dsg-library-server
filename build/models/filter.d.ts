interface Filter {
    selectFields?: string[];
    filterFields?: FilterField[];
    pagination?: Pagination;
    sorts?: Sort[];
}
interface FilterField {
    field: string;
    operator: 'eq' | 'ne' | 'lt' | 'lte' | 'gt' | 'gte' | 'ilike';
    value: string | number | boolean | null;
}
interface Pagination {
    page: number;
    pageSize: number;
}
interface Sort {
    field: string;
    order: string;
}
export type { Filter };
