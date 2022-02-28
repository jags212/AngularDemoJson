export interface AssessmentEngineResults { 
    eligibilityWarnings?: Array<string> | null;
    assessResults?: { [key: string]: Array<AssessmentResult>; } | null;
    disbursements?: Array<Disbursement> | null;
}

export interface AssessmentResult { 
    disbursementType?: string | null;
    months?: { [key: string]: AssessmentMonthResult; } | null;
}

export interface Disbursement { 
    date?: string;
    recepientTypeCode?: string | null;
    disbursementTypeCode?: string | null;
    amount?: number;
    readonly disbursementDetails?: Array<AssessmentItemResult> | null;
}

export interface AssessmentMonthResult { 
    hasWarnings?: boolean;
    amount?: number;
    items?: Array<AssessmentItemResult> | null;
}

export interface AssessmentItemResult { 
    amount?: number;
    warnings?: Array<string> | null;
    frequencyTypeCode?: string | null;
    categoryTypeCode?: string | null;
}