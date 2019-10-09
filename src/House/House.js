import React from 'react';
import styled from 'styled-components';
import Building from './Building/Building';
import Room from './Rooms/Room';

const LivingRoom = styled(Room)`
  grid-area: lr;
`;

const Kitchen = styled(Room)`
  grid-area: k;
`;

const Hallway = styled(Room)`
  grid-area: h;
`;

const DiningRoom = styled(Room)`
  grid-area: dr;
`;

const House = () => {
  return (
    <Building>
      <LivingRoom>Living Room</LivingRoom>
      <Kitchen>Kitchen</Kitchen>
      <Hallway>Hallway</Hallway>
      <DiningRoom>Dining Room</DiningRoom>
    </Building>
  );
}

// Steps for demo

// - Build House component
// - Import Building component and add to House
// - Import Room component and use for each room in House
// - Create new SCs for each room, extending Room styles for each
// - Add grid-area for each room
// - Change border styles for rooms where relevant

export default House;
