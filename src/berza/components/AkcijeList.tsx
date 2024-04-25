import { Button, Table, TableBody, TableRow } from "@mui/material"
import { Akcija, AkcijaList } from "berza/types/types"
import { ScrollContainer, StyledHeadTableCell, StyledTableCell, StyledTableHead, StyledTableRow } from '../../utils/tableStyles';
import BuyOptionPopup from "./BuyOptionPopup";
import BuyStockPopup from "./BuyStockPopup";
import { useNavigate } from "react-router-dom";

const AkcijeList: React.FC<AkcijaList> = ({ stocks }) => {
    const navigate = useNavigate()
    const handleSelect = (event: any) => {
        const id = event.currentTarget.id;
        console.log(id)
    };

    return (
        <ScrollContainer>
            <Table sx={{ minWidth: 650, marginTop: 0 }}>
                <StyledTableHead>
                    <TableRow>
                        <StyledHeadTableCell>Oznaka</StyledHeadTableCell>
                        <StyledHeadTableCell>Cena</StyledHeadTableCell>
                        <StyledHeadTableCell>Volume</StyledHeadTableCell>
                        <StyledHeadTableCell>Promena</StyledHeadTableCell>
                        <StyledHeadTableCell>Promena%</StyledHeadTableCell>
                        <StyledHeadTableCell>Poslednje azuriranje</StyledHeadTableCell>
                        <StyledHeadTableCell>Kupi</StyledHeadTableCell>
                        <StyledHeadTableCell>OTC</StyledHeadTableCell>
                        <StyledHeadTableCell>FIX DIS</StyledHeadTableCell>
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    {stocks?.map((stock: Akcija) => (
                        <StyledTableRow key={stock.ticker} id={stock.ticker} onClick={handleSelect}>
                            <StyledTableCell>{stock.ticker}</StyledTableCell>
                            <StyledTableCell>{stock.price}</StyledTableCell>
                            <StyledTableCell>{stock.volume}</StyledTableCell>
                            <StyledTableCell>{stock.change}</StyledTableCell>
                            <StyledTableCell>{stock.dividendYield}</StyledTableCell>
                            <StyledTableCell>{stock.lastRefresh}</StyledTableCell>
                            <StyledTableCell><BuyStockPopup /></StyledTableCell>
                            <StyledTableCell><BuyOptionPopup /></StyledTableCell>
                            <StyledTableCell>
                                <Button onClick={()=>{
                                    navigate(`/opcije?ticker=${stock.ticker}&name=${stock.nameDescription.split(" is ")[0]}&price=${stock.price}`)}}>
                                    Opcije</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>

            </Table >
        </ScrollContainer>
    )
}
export default AkcijeList;