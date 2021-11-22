import {
  CardWrap,
  CardLabelWrap,
  CardLabel,
  NameWrap,
  PlayerName,
} from './PlayerCard.styled';

function PlayerCard({ firstname, lastname }) {
  const label = `${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`;

  return (
    <CardWrap>
      <CardLabelWrap>
        <CardLabel>{label}</CardLabel>
      </CardLabelWrap>
      <NameWrap>
        <PlayerName>{firstname} </PlayerName>
        <PlayerName> {lastname}</PlayerName>
      </NameWrap>
    </CardWrap>
  );
}

export default PlayerCard;
