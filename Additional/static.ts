// Static Property and Static Method

class College {
    static collegeName: string = "XYZ Engineering College";

    static displayCollege(): void {
        console.log("College Name:", College.collegeName);
    }
}

College.displayCollege();
