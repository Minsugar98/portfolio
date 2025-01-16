import styles from './index.module.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { isDark } = useTheme();
  const form = useRef();
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !form.current.from_name.value ||
      form.current.from_name.value.length < 1
    ) {
      newErrors.name = '이름을 입력해주세요';
    }

    if (
      !form.current.from_email.value ||
      !emailRegex.test(form.current.from_email.value)
    ) {
      newErrors.email = '올바른 이메일 주소를 입력해주세요';
    }

    if (!form.current.message.value || form.current.message.value.length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const errorMsg = [
        errors.name && `❌ ${errors.name}`,
        errors.email && `❌ ${errors.email}`,
        errors.message && `❌ ${errors.message}`,
      ]
        .filter(Boolean)
        .join('\n');
      toast.error(errorMsg, {
        icon: false,
        hideProgressBar: true,
        closeButton: false,
        style: {
          whiteSpace: 'pre-line',
          backgroundColor: isDark ? '#f5f5f5' : '#1a1a1a',
          color: isDark ? '#1a1a1a' : '#f5f5f5',
        },
      });
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast('😊 전송 했어요! 감사합니다.', {
            icon: false,
            hideProgressBar: true,
            closeButton: false,
            style: {
              backgroundColor: isDark ? '#f5f5f5' : '#1a1a1a',
              color: isDark ? '#1a1a1a' : '#f5f5f5',
            },
          });
          form.current.reset();
        },
        (error) => {
          toast('😢 전송 실패 했어요. 다시 시도해주세요.', {
            icon: false,
            hideProgressBar: true,
            closeButton: false,
            style: {
              backgroundColor: isDark ? '#f5f5f5' : '#1a1a1a',
              color: isDark ? '#1a1a1a' : '#f5f5f5',
            },
          });
        }
      );
  };
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <ToastContainer
        position="top-center"
        theme={isDark ? 'dark' : 'light'}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`${styles.contactForm} ${
          isDark ? styles.dark : styles.light
        }`}
      >
        <label>Name</label>
        <input type="text" name="from_name" className={styles.contactInput} />
        <label>Email</label>
        <input type="email" name="from_email" className={styles.contactInput} />
        <label>Message</label>
        <textarea name="message" className={styles.contactTextarea} />
        <input
          type="submit"
          value="Send"
          className={`${styles.contactSubmit} ${
            isDark ? styles.darkSubmit : styles.lightSubmit
          }`}
        />
      </form>
    </div>
  );
}
