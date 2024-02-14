import { useBurn } from "../hooks/useBurn";
import { BurnButtonBar } from './BurnButtonBar'
export const BurnPage = () => {
    const {
        suppliesChain,
        fetchSupplies,
    } = useAppSupplies(true);

    const {
        burnTransactions,
        isOldToken,
        setIsOldToken,
        burnAmount,
        onChangeBurnAmount,
        executeBurn,
        txButton,
        txProgress,
        approveTxHash,
        burnTxHash,
    } = useBurn({ suppliesChain, isOldToken, fetchSupplies });

    return (
        <div>
            <DashboardLayoutStyled className="burnpage">
                <div
                    className="top_conatiner burnpage"
                    style={{ alignItems: "flex-start" }}
                >
                    <div className="info_box filled">
                        <h1 className="title">App TOKEN BURN</h1>
                        <BurnButtonBar
                            burnAmount={burnAmount}
                            onChangeBurnAmount={onChangeBurnAmount}
                            executeBurn={executeBurn}
                            txButton={txButton}
                            txProgress={txProgress}
                        />
                        {burnTxHash && (
                            <div className="tx_links">
                                <AppTooltip
                                    title={`Check burn Transaction on chain ${suppliesChain?.blockExplorers?.default?.name}`}
                                >
                                    <AppExtLink
                                        url={`${suppliesChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
                                        className="header_link"
                                    >
                                        Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
                                    </AppExtLink>
                                </AppTooltip>
                            </div>
                        )}
                    </div>
                    <BurnStatsContainer suppliesChain={suppliesChain} statsSupplies={supplies} tokenAddress={tokenAddress} />
                </div>
            </DashboardLayoutStyled>
            <TransactionTableStyled>
                <div className="header">
                    <p className="header_label">Burn Transactions</p>
                </div>
                <BurnTxTable data={burnTransactions} priceUSD={coinData?.current_price?.usd} />
            </TransactionTableStyled>
            <ChainSelector
                title={"Switch Token Chain"}
                openChainSelector={openChainSelector}
                setOpenChainSelector={setOpenChainSelector}
                chains={receiveChains}
                selectedChain={suppliesChain}
                setSelectedChain={setSuppliesChain}
            />
            <AppToast
                position={{ vertical: "bottom", horizontal: "center" }}
                message={toastMsg}
                severity={toastSev}
            />
        </div>
    );
};