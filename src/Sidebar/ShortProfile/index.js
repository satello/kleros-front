import React from 'react'
import Icon from '../../Icon'
import Identicon from '../../Identicon'
import { TRUNCATED_DIGITS } from '../../constants'
import { truncateAddress } from '../../helpers/truncateAddress'
import './ShortProfile.css'

const ShortProfile = ({
  className,
  address = 0x0,
  balancePNK = 0,
  notificationIsActive = false,
  children,
  theme,
  ...rest
}) => (
  <div className={`ShortProfile-container ${className} ${theme}`}>
    <div className='icon'>
      <Identicon seed={address} />
    </div>
    <div className='description'>
      <div className='address'>
        { truncateAddress(address, TRUNCATED_DIGITS) }
      </div>
      <div className='balancePNK'>
        { balancePNK } PNK
      </div>
    </div>
    <div className='notification'>
      <Icon name='notification' />
      { notificationIsActive && <div className='notificationIsActive' /> }
    </div>
    { children }
  </div>
)

export default ShortProfile
