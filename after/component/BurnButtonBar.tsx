import { Button, CircularProgress } from "@material-ui/core";
import AppIcon from "components/AppIcon";
import { BurnTxProgress } from "./constants";

interface BurnButtonProps {
    txButton: BurnTxProgress;
    txProgress: boolean;
    burnAmount: string;
    executeBurn: () => void;
}

const BurnButtonBar: React.FC<BurnButtonBarProps> = ({
    txButton,
    txProgress,
    burnAmount,
    executeBurn,
}) => {
    return (
        <div className="burn_bar">
            <div className="input_value_box">
                <p className="input_muted">Enter amount to Burn</p>
                <input
                    className="input_value"
                    type="text"
                    value={burnAmount}
                    placeholder="0.00"
                    onChange={(e) => onChangeBurnAmount(e)}
                />
            </div>
            <Button
                variant="outlined"
                onClick={executeBurn}
                startIcon={
                    txProgress ? (
                        <CircularProgress size={20} color="inherit" />
                    ) : (
                        <AppIcon
                            url="/icons/fire.svg"
                            fill={IconFilter.primary}
                            size={1.5}
                            margin={0}
                        />
                    )
                }
            >
                <span>{txButton}</span>
            </Button>
        </div>
    );
};