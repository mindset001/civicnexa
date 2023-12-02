import React from "react";
import {
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    })
);
 
function getSteps() {
    return [
        <b style={{ color: "purple" }}>
            'Enter Personal Details'
        </b>,
        <b style={{ color: "purple" }}>
            'Enter Education Details'
        </b>,
        <b style={{ color: "purple" }}>'Enter Address'</b>,
    ];
}
 
function getStepContent(step: number) {
    switch (step) {
        case 0:
            return (
                <form className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        required
                    ></input>
                    <br></br>
                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        required
                    ></input>
                </form>
            );
        case 1:
            return (
                <form className="form-group">
                    <label>High School Percentage</label>
                    <input
                        type="number"
                        placeholder="High School Percentage"
                    ></input>
                    <br></br>
                    <label>Graduation percentage</label>
                    <input
                        type="number"
                        placeholder="Graduation Percentage"
                    ></input>
                </form>
            );
        case 2:
            return (
                <form className="form-group">
                    <label>Permanent Address</label>
                    <input
                        type="text"
                        placeholder="Permanent Address"
                    ></input>
                    <br></br>
                    <label>Temporary Address</label>
                    <input
                        type="text"
                        placeholder="Temporary Address"
                    ></input>
                </form>
            );
        default:
            return "Unknown step";
    }
}
 
export default function Test() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
 
    const handleNext = () => {
        setActiveStep(
            (prevActiveStep) => prevActiveStep + 1
        );
    };
 
    const handleBack = () => {
        setActiveStep(
            (prevActiveStep) => prevActiveStep - 1
        );
    };
 
    const handleReset = () => {
        setActiveStep(0);
    };
 
    return (
        <div className={classes.root}>
            <h1>GeeksforGeeks Stepper Form</h1>
            <Stepper
                activeStep={activeStep}
                orientation="vertical"
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>
                                {getStepContent(index)}
                            </Typography>
                            <div
                                className={
                                    classes.actionsContainer
                                }
                            >
                                <div>
                                    <Button
                                        disabled={
                                            activeStep === 0
                                        }
                                        onClick={handleBack}
                                        className={
                                            classes.button
                                        }
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={
                                            classes.button
                                        }
                                    >
                                        {activeStep ===
                                        steps.length - 1
                                            ? "Finish"
                                            : "Next"}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                >
                    <Typography>
                        Form is submitted
                    </Typography>
                    <Button
                        onClick={handleReset}
                        className={classes.button}
                    >
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}