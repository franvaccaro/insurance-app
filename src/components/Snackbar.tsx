import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import close from '../assets/icons/Close_Mobile.svg';
import './styles/snackbar.css';

function Snackbar() {
  const dispatch = useDispatch();
  const notifications: any = useSelector((state: RootState) => state.notifications);

  return (
    <ul>
      <AnimatePresence initial={false}>
        {notifications.notifArr.map((notif: any) => (
          <motion.li
            key={notif.id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <p>
              {notif.message}
              {
                notif.link
                && (
                  <>
                    {' '}
                    <a
                      className="snackLink"
                      href={notif.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {notif.linktext}
                    </a>
                    <br />
                    {notif.message2}
                  </>
                )
              }
            </p>
            <input
              type="image"
              src={close}
              width="25"
              height="25"
              alt="close"
              onClick={() => dispatch({
                type: 'DELETE_NOTIFICATION',
                payload: {
                  id: notif.id,
                },
              })}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default Snackbar;
