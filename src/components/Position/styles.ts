import styled from "styled-components";

interface PositionInterface{
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    type: string;
}

const Position = styled.div<PositionInterface>`
    position: ${props => props.type};
    top:  ${props => props.top}px;
    left:  ${props => props.left}px;
    bottom:  ${props => props.bottom}px;
    right:  ${props => props.right}px;
`;

export default Position;