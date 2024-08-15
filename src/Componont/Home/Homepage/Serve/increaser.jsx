import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Increaser() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="w-full mt-5 flex justify-around flex-wrap gap-10 mt-16 mb-16">
        {[
          { end: 200, label: "Projects Completed" },
          { end: 80, label: "Positive Testimonials" },
          
          { end: 5, label: "Years Experience" },
          { end: 95, label: "Customers Satisfaction", suffix: "%" },
        ].map((item, index) => (
          <Card
            key={index}
            className="flex"
            sx={{ maxWidth: 275, background: "none" }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className="text-4xl text-white text-center">
                    {counterOn && (
                      <CountUp
                        className="text-4xl"
                        start={0}
                        end={item.end}
                        delay={0}
                        suffix={item.suffix || "+"}
                      />
                    )}
                  </h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p className="text-head text-xl font-bold text-center">
                    {item.label}
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </ScrollTrigger>
  );
}
