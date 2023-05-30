import React, { useState } from "react";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы, например, отправка данных на сервер
    console.log("Форма отправлена");
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.form__title}>Заполните форму</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.form__container}
      >
        <div className={styles.form__field}>
          <label
            htmlFor="name"
            className={styles.form__label}
          >
            Имя:
          </label>
          <input
            type="text"
            id="name"
            className={styles.form__input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.form__field}>
          <label
            htmlFor="email"
            className={styles.form__label}
          >
            Электронная почта:
          </label>
          <input
            type="email"
            id="email"
            className={styles.form__input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.form__field}>
          <label
            htmlFor="phone"
            className={styles.form__label}
          >
            Телефон:
          </label>
          <input
            type="tel"
            id="phone"
            className={styles.form__input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.form__field}>
          <label
            htmlFor="address"
            className={styles.form__label}
          >
            Адрес:
          </label>
          <input
            type="text"
            id="address"
            className={styles.form__input}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={styles.form__button}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
