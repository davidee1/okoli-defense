const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const contactEmail = "Davidokoli00@gmail.com";

if (contactForm instanceof HTMLFormElement && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    formStatus.textContent = "Your email app should open with a prefilled draft. If it doesn't, email Davidokoli00@gmail.com directly.";
  });
}
