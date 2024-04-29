import React from 'react';
import { useSelector } from 'react-redux';
import { configsSelector } from '../../store/feature/configsSlice';
import InviteFriend from '../../components/InviteFriends/InviteFriend';

const InvitePageLayout = () => {
  const { general_configs, accounts_configs, MARKETPLACE_MODULES } =
    useSelector(configsSelector);
  return (
    <div className=" flex justify-center ">
      {}
      <InviteFriend general_configs={general_configs} />
    </div>
  );
};

export default InvitePageLayout;
