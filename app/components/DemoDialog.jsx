"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const DemoDialog = forwardRef(function DemoDialog({ type }, dialogRef) {
  const internalRef = useRef(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const isRegistration = type === "reg";
  const titleId = `${type}T`;

  useImperativeHandle(dialogRef, () => ({
    open() {
      setError("");
      setStatus("");
      internalRef.current?.showModal();
    },
  }));

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const value = (name) => String(new FormData(form).get(name) || "").trim();
    const email = value("email");
    let message = "";

    if (isRegistration) {
      if (value("name").length < 2) message = "Enter your full name.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message = "Enter a valid email address.";
      } else if (!value("batch")) message = "Select your graduation batch.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message = "Enter a valid email address.";
    } else if (value("pw").length < 6) {
      message = "Password must be at least 6 characters.";
    }

    setError(message);
    if (message) return;
    form.reset();
    setStatus("success");
  }

  return (
    <dialog
      ref={internalRef}
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      onClose={() => {
        setError("");
        setStatus("");
      }}
    >
      <h2 id={titleId}>{isRegistration ? "Register as Alumni" : "Login"}</h2>
      <p className="demo">
        {isRegistration
          ? "Demo only. Nothing is sent or saved, and no account is created."
          : "Demo only. No real sign-in takes place."}
      </p>
      <form noValidate onSubmit={submit}>
        {isRegistration ? (
          <>
            <label htmlFor="rn">Full name</label>
            <input id="rn" name="name" autoComplete="name" />
            <label htmlFor="re">Email</label>
            <input id="re" name="email" type="email" autoComplete="email" />
            <label htmlFor="rb">Graduation batch</label>
            <select id="rb" name="batch" defaultValue="">
              <option value="">Select year</option>
              {Array.from({ length: 67 }, (_, index) => 2026 - index).map((year) => (
                <option value={year} key={year}>{year}</option>
              ))}
            </select>
          </>
        ) : (
          <>
            <label htmlFor="le">Email</label>
            <input id="le" name="email" type="email" autoComplete="email" />
            <label htmlFor="lp">Password</label>
            <input id="lp" name="pw" type="password" autoComplete="current-password" />
          </>
        )}
        <p className="err" role="alert">{error}</p>
        {status === "success" && (
          <p className="ok">
            Form checked. This is a demo, so nothing was submitted and no account or session exists.
          </p>
        )}
        <div className="actions">
          <button className="btn" type="submit">
            {isRegistration ? "Submit demo" : "Try demo login"}
          </button>
          <button className="xbtn" type="button" onClick={() => internalRef.current?.close()}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
});

export default DemoDialog;
