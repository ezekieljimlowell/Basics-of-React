import React from "react";

export const Home = () => {
    return (
        <>
            <p>
                Win SCP is a software used to monitor files by using Secured File Transfer Protocol(SFTP).
                It is used to check files transferred from SAP server to Dealer Management System(DMS) and DMS
                to SAP. Files all are generated from SAP by web methods. I have to schedule task for files by
                priority wise in web methods. For example Invoice files are generated every one hour out of
                24 hours. During month end, large numbers of files need to be pushed from SAP to DMS.
                At that time some problem may arise in the file generation and files may not be generated
                automatically from SAP. I need to rectify the issues and run back web methods and send
                files to DMS and monitor whether invoice files are uploaded in DMS.
                Parts, pricing, HSN tax files and many other files were generated automatically from
                SAP and went to DMS periodically. This process for outbound files.
                Next is inbound files which are generated from DMS and posted to SAP through web methods.
                These files also generated in large numbers during month end and needs to be pushed to SAP.
            </p>
        </>
    )
}