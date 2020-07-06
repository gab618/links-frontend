import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTokenExpire } from '../../helpers/jwt';
import { getToken } from '../../helpers/account';
import { getFreshToken } from '../../actions/AccountActions';

function TokenRefresher({ getFreshToken }) {
  const TRESHOLD = 30;
  const calculate = () => {
    const token = getToken();
    const expires = getTokenExpire(token);
    const secondsToExpire = expires - Date.now() / 1000;

    return secondsToExpire;
  };

  setInterval(calculate, 1000);
  useEffect(() => {
    const secondsToExpire = calculate() - TRESHOLD;
    console.log(secondsToExpire);

    const id = setTimeout(getFreshToken, secondsToExpire * 1000);
    return () => clearTimeout(id);
  }, [getFreshToken]);
  return null;
}

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher);
