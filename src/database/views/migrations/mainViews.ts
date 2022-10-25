import { DbInstance } from "../../Database"

export const mainViews = async () => {
    const sql = `CREATE VIEW IF NOT EXISTS VWUserExtraData
    AS
    SELECT 
        User.Id 	 AS IdUser,
        SocialReasonValue.Value AS SocialReason,
        ComercialNameValue.Value AS ComercialName
    FROM User
    INNER JOIN SysTypeMD AS SocialReasonType ON (
        User.IdSysType = SocialReasonType.IdSysType
        AND SocialReasonType.UniqueCode  = 'SOCIAL_REASON'
    )
    INNER JOIN XDUser AS SocialReasonValue ON (
        SocialReasonValue.IdUser = User.Id 
        AND SocialReasonType.Id  = SocialReasonValue.IdSysTypeMD 
    )
    INNER JOIN SysTypeMD AS ComercialNameType ON (
        User.IdSysType = ComercialNameType.IdSysType
        AND ComercialNameType.UniqueCode  = 'COMERCIAL_NAME'
    )
    INNER JOIN XDUser AS ComercialNameValue ON (
        ComercialNameValue.IdUser = User.Id 
        AND ComercialNameType.Id  = ComercialNameValue.IdSysTypeMD 
    )`;
    
    DbInstance.query(sql, { raw: true })
}