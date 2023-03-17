import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OrderModal.module.css';
import MainButton from '../UI/MainButton';

export default function OrderModal(props) {
  const [confirmCheckout, setConfirmCheckout] = useState(false);

  const { coffeeMethod, coffeeType, amount, grindType, delivery } =
    props.orderContent;

  const { isCapsule, shippingPrice, closeModal } = props;

  return (
    <div className={styles.backdrop}>
      <div className={styles.orderModal}>
        <h1 className={styles.orderModalTitle}>Order Summary</h1>
        <div className={styles.orderModalSummaryWrapper}>
          {!confirmCheckout && (
            <>
              <p className={styles.orderModalSummary}>
                “I drink my coffee {props.isCapsule ? ' using ' : ' as '}
                <span className={styles.orderModalSpan}>{coffeeMethod}</span>,
                with a{' '}
                <span className={styles.orderModalSpan}>{coffeeType}</span> type
                of bean. <span className={styles.orderModalSpan}>{amount}</span>{' '}
                ground{' '}
                {!isCapsule && (
                  <>
                    <span>ala </span>
                    <span className={styles.orderModalSpan}>{grindType}</span>
                  </>
                )}
                , sent to me{' '}
                <span className={styles.orderModalSpan}>{delivery}</span>.”
              </p>
              <p className={styles.doubleCheckOrder}>
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.
              </p>
            </>
          )}
          {confirmCheckout && (
            <h2 className={styles.orderModalTitle}>
              Thank you for your order! Please check out for more information on
              our range of coffee
            </h2>
          )}
          {!confirmCheckout && (
            <MainButton onClick={() => setConfirmCheckout(true)}>
              Checkout - ${shippingPrice.toFixed(2)}/mo
            </MainButton>
          )}
          {confirmCheckout && (
            <MainButton onClick={closeModal}>Return to menu</MainButton>
          )}
        </div>
      </div>
    </div>
  );
}

OrderModal.propTypes = {
  coffeeMethod: PropTypes.string,
  caffeineOption: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};
