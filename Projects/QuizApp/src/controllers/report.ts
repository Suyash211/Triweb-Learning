import Report from "../models/report";
import { Request, Response, NextFunction } from "express";
import ProjectError from "../../helper/error";

interface returnResponse{
    status : "Success" | "Error";
    message : String,
    data : {} | []
}

const getReport = async (req : Request,res : Response, next : NextFunction) => {
    try{
        let report;
        if(!!req.params.reportId){
            const reportId = req.params.reportId;
            report = await Report.findById(reportId);

            if(!report){
                const err = new ProjectError("Report not found");
                err.statuscode = 403;
                throw err;
            }

            if(report.userId.toString() !== req.userId){
                const err = new ProjectError("You are not allowed to access this file!");
                err.statuscode = 404;
                throw err;
            }
        }
        else{
            report = await Report.find({userId : req.userId});

            if(!report){
                const err = new ProjectError("Report not found");
                err.statuscode = 403;
                throw err;
            }

        }

        if(!report){
            const err = new ProjectError("Report not found");
            err.statuscode = 403;
            throw err;
        }


        const resp : returnResponse = {"status" : "Success","message" : "Reports",data : report};
        res.status(200).send(resp);
    }
    catch(error){
        next(error);
    }
}

export { getReport };