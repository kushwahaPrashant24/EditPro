import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

function Gotproject() {
    return <>
         <div className="w-full bg-Red-200 flex items-center justify-center flex-col gap-10">
         <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl text-center font-black">Got New Project</h1>
            <div className="h-2 rounded-md flex align-center bg-pink-900 w-36"></div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <p>Call us at this number for instant support</p>
                <p>+91 8967908081</p>
                <Link to="/contact">
            <Stack spacing={2} direction="row">
              <Button variant="contained">View All</Button>
            </Stack>
          </Link>
            </div>
         </div>
      
    </>
}

export default Gotproject;