export interface employeeVisa {
    visaStage: visaStage,
    sampleDocumentList: sampleDocument[],
    visaDocumentList: personalDocument[],
}
export interface visaStage {
    awfId: number,
    status: string,
    type: string,
}
export interface sampleDocument {
    type: string,
    path: string,

}
export interface personalDocument {
    docId?: number,
    path: string,
    title: string,
    createDate?: Date,
}
