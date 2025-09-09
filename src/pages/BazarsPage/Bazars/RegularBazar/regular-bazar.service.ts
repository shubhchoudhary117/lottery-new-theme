

export class RegularBazarService {
    // get bazar status
    static getRunningStatus = (closeTime: string): string => {
        const now = new Date();
        const todayDate = now.toISOString().split("T")[0];
        const todayClose = new Date(`${todayDate}T${closeTime}`);
        if (todayClose > now) {
            return "Running for Today";
        } else {
            return "Running for Tomorrow";
        }
    }


   

}