import React, { useState, useEffect, useRef } from "react";

import Photo from "../assets/myphoto.jpg";


const RESUME_URL = "https://drive.google.com/file/d/1WXo_Q_cqn7ABOcb9A3qxbA1-qnPPPS0I/view";


const DATA = {
  personal: {
    name: "Vignesh Goud",
    email: "vigneshgoud12@gmail.com",
    phone: "+91 9505455721",
    linkedin: "https://www.linkedin.com/in/vignesh-goud-8187212b6/",
    github: "https://github.com/vigneshdev123coder?tab=repositories",
    summary:
      "Full Stack Web Developer with hands-on professional experience building scalable, secure, and client-facing web applications. Strong logical and analytical thinking with expertise in dashboard development, RESTful APIs, backend file upload systems, and MySQL database design. Proficient in React.js, JavaScript (ES6+), Node.js, and Express.js.",
  },
  roles: [
    "Full Stack Developer",
    "Full Stack Engineer",
    "Node.js Developer",
    "API Architect",
    "MySQL Expert",
  ],
  skills: {
    "Frontend 🖥": {
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "React Hooks", "React Router"],
      levels: [92, 90, 95, 88, 90, 85],
    },
    "Backend ⚙️": {
      items: ["Node.js", "Express.js", "RESTful APIs", "MVC Architecture"],
      levels: [85, 83, 88, 82],
    },
    "Database 🗄": {
      items: ["MySQL", "CRUD Operations"],
      levels: [82, 90],
    },
    "Tools 🛠": {
      items: ["Git", "GitHub", "VS Code"],
      levels: [85, 85, 95],
    },
  },
  projects: [
    {
      id: 1,
      color: "#00d4ff",
      title: "Full Stack Document Upload & Tracking System",
      stack: ["React", "Node.js", "MySQL"],
      desc: "A client-facing document submission system for business service workflows with multi-document upload, status tracking, and admin verification.",
      liveUrl: "https://full-stack-document-uploads-and-tra.vercel.app/",
      codeUrl: "https://github.com/vigneshdev123coder/full-stack-document-uploads-and-tracking-system-project",
      details: [
        "Built a client-facing document submission system for business service workflows.",
        "Enabled uploading multiple documents including ID proofs, forms, and receipts with status tracking.",
        "Developed backend APIs to store documents in structured folders, map metadata in MySQL, and allow admin verification.",
      ],
    },
    {
      id: 2,
      color: "#7c3aed",
      title: "Banking Application",
      stack: ["React", "React Router", "React Hooks"],
      desc: "A simulated banking platform with authentication, transactions, and account management using React Hooks and Router for seamless navigation.",
      liveUrl: "https://react-project-banking-app.vercel.app/",
      codeUrl: "https://github.com/vigneshdev123coder/react-project-banking-app",
      details: [
        "Developed a simulated banking platform supporting authentication, transactions, and account management.",
        "Implemented React Router and reusable components for scalable navigation.",
        "Managed application state using React Hooks for real-time updates.",
      ],
    },
    {
      id: 3,
      color: "#f59e0b",
      title: "Weather Application",
      stack: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
      desc: "Real-time weather application with city-based search, dynamic data rendering, and a fully responsive UI.",
      liveUrl: "https://vigneshdev123coder.github.io/weather-app-js-project/",
      codeUrl: "https://github.com/vigneshdev123coder/weather-app-js-project",
      details: [
        "Built a real-time weather application using OpenWeather API.",
        "Implemented city-based search with dynamic data rendering.",
        "Designed a responsive UI using HTML, CSS, and JavaScript.",
      ],
    },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "24hr7 Commerce Pvt. Ltd.",
      period: "Apr 2025 – Present",
      current: true,
      points: [
        "Developed responsive admin and client dashboards as Single Page Applications using React.js.",
        "Built secure RESTful APIs using Node.js and Express.js following MVC architecture.",
        "Implemented backend file upload systems with folder-based storage and MySQL database mapping.",
        "Designed and optimized SQL queries and schemas for dashboard-driven workflows.",
        "Integrated Razorpay payment gateway with backend verification and automated PDF receipt generation.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech – Mechanical Engineering",
      institution: "Brilliant Institute of Engineering and Technology",
      year: "2023",
    },
  ],
  certifications: [
    {
      title: "Full Stack Developer",
      issuer: "10000 Coders",
      link: "https://drive.google.com/file/d/1XLmQZ9eYFGSRjf6Nptbxzc5_W1PoqsgP/view",
    },
    {
      title: "Internship Certificate",
      issuer: "24hr7 Commerce Pvt. Ltd.",
      link: "https://drive.google.com/file/d/13SZrPAEnj1dUx8S90u4pSx1zVsxU2zXU/view",
    },
    {
      title: "Training Certificate",
      issuer: "24hr7 Commerce Pvt. Ltd.",
      link: "https://drive.google.com/file/d/1mE_22cG3XcKgDv04-_5Wh8dmdhHuSMOu/view",
    },
  ],
};

const GLOBAL_CSS = [
  "@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');",
  "*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }",
  "html { scroll-behavior: smooth; }",
  "body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }",
  "a { text-decoration: none; color: inherit; }",
  "ul { list-style: none; }",
  "::selection { background: #00d4ff; color: #000; }",
  "@keyframes floatOrb { 0%,100%{ transform:translateY(0) scale(1) } 50%{ transform:translateY(-28px) scale(1.04) } }",
  "@keyframes pulseDot { 0%,100%{ opacity:1; transform:scale(1) } 50%{ opacity:.6; transform:scale(.85) } }",
  "@keyframes blink { 0%,100%{ opacity:1 } 50%{ opacity:0 } }",
  "@keyframes scrollLine { 0%{ transform:scaleY(0); transform-origin:top } 50%{ transform:scaleY(1); transform-origin:top } 51%{ transform-origin:bottom } 100%{ transform:scaleY(0); transform-origin:bottom } }",
  "@keyframes ringFloat { 0%,100%{ transform:scale(1); opacity:.5 } 50%{ transform:scale(1.03); opacity:1 } }",
  "@keyframes fadeUp { from{ opacity:0; transform:translateY(-8px) } to{ opacity:1; transform:translateY(0) } }",
].join("\n");

function T(dark) {
  return {
    bg:    dark ? "#050810" : "#f5f7ff",
    bg2:   dark ? "#0d1120" : "#eef1fb",
    sur:   dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)",
    sur2:  dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.97)",
    bdr:   dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    txt:   dark ? "#f0f4ff" : "#0d1120",
    txt2:  dark ? "#8b9ab8" : "#3d4f72",
    txt3:  dark ? "#5a6888" : "#7a8baa",
    navBg: dark ? "rgba(5,8,16,0.92)" : "rgba(245,247,255,0.92)",
    acc:   "#00d4ff",
    acc2:  "#7c3aed",
  };
}

function useTyping(words) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wi];
    let timer;
    if (!del && ci < word.length) {
      timer = setTimeout(() => setCi((c) => c + 1), 90);
    } else if (!del && ci === word.length) {
      timer = setTimeout(() => setDel(true), 1900);
    } else if (del && ci > 0) {
      timer = setTimeout(() => setCi((c) => c - 1), 45);
    } else {
      setDel(false);
      setWi((w) => (w + 1) % words.length);
    }
    setDisplay(word.substring(0, ci));
    return () => clearTimeout(timer);
  }, [ci, del, wi, words]);
  return display;
}

function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVis(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function revealStyle(vis) {
  return {
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(36px)",
    transition: "opacity 0.75s ease, transform 0.75s ease",
  };
}

function ctr() {
  return { maxWidth: 1100, margin: "0 auto", padding: "0 clamp(1.2rem,5vw,2.5rem)" };
}

function sec(bg) {
  return { padding: "clamp(4.5rem,9vw,7rem) 0", background: bg, transition: "background 0.4s" };
}

function btnP(t) {
  return {
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: "0.72rem 1.6rem", background: t.acc, color: "#000",
    fontWeight: 700, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
    borderRadius: 8, border: "2px solid " + t.acc, cursor: "pointer", transition: "all 0.25s",
  };
}

function btnS(t) {
  return {
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: "0.72rem 1.6rem", color: t.txt, fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
    borderRadius: 8, border: "2px solid " + t.bdr, background: t.sur,
    cursor: "pointer", transition: "all 0.25s",
  };
}

function IconGH() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLI() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconEM() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function SecHdr({ tag, title, sub, t }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem,5vw,4.5rem)" }}>
      <span style={{
        display: "inline-block", fontSize: "0.72rem", fontWeight: 600,
        letterSpacing: "0.2em", textTransform: "uppercase", color: t.acc,
        background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)",
        padding: "0.28rem 0.9rem", borderRadius: 50, marginBottom: "0.9rem",
      }}>
        {tag}
      </span>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(1.8rem,4.5vw,2.75rem)",
        fontWeight: 800, color: t.txt, lineHeight: 1.1,
      }}>
        {title}
      </h2>
      {sub && <p style={{ color: t.txt2, marginTop: "0.6rem", fontSize: "0.97rem" }}>{sub}</p>}
    </div>
  );
}

function Navbar({ dark, toggleTheme, scrollTo }) {
  const t = T(dark);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: (scrolled ? "0.8rem" : "1.2rem") + " clamp(1.2rem,5vw,2.5rem)",
      background: scrolled ? t.navBg : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid " + t.bdr : "none",
      transition: "all 0.4s",
    }}>
      <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, cursor: "pointer", color: t.txt }}>
        <span style={{ color: t.acc, fontSize: "1.6rem" }}>V</span>ignesh<span style={{ color: t.acc }}>.</span>
      </div>

      <div style={open ? {
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: dark ? "rgba(5,8,16,0.97)" : "rgba(245,247,255,0.97)",
        backdropFilter: "blur(20px)", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "1.5rem", zIndex: 998,
      } : { display: "flex", alignItems: "center", gap: "0.2rem" }}>
        {links.map((l) => (
          <button key={l} onClick={() => { scrollTo(l.toLowerCase()); setOpen(false); }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: open ? "1.25rem" : "0.88rem",
              fontWeight: open ? 700 : 500, color: t.txt2, padding: "0.35rem 0.72rem", borderRadius: 6,
              background: "none", border: "none", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = t.txt; e.currentTarget.style.background = t.sur; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = t.txt2; e.currentTarget.style.background = "none"; }}>
            {l}
          </button>
        ))}
        {/* ✅ RESUME BUTTON - now links to Google Drive */}
        <a href={RESUME_URL} target="_blank" rel="noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.84rem", fontWeight: 600,
            color: t.acc, border: "1px solid " + t.acc, padding: "0.36rem 0.9rem",
            borderRadius: 6, background: "none", cursor: "pointer",
            marginLeft: open ? 0 : "0.4rem", transition: "all 0.2s",
            display: "inline-flex", alignItems: "center", gap: "0.35rem", textDecoration: "none" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = t.acc; e.currentTarget.style.color = "#000"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = t.acc; }}>
          <IconDownload /> Resume
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", zIndex: 999, position: "relative" }}>
        <button onClick={toggleTheme} style={{ width: 34, height: 34, borderRadius: "50%", background: t.sur,
            border: "1px solid " + t.bdr, display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "1rem", color: t.txt2, cursor: "pointer" }}>
          {dark ? "☀" : "◑"}
        </button>
        <button onClick={() => setOpen((o) => !o)} style={{ display: "flex", flexDirection: "column", gap: 5,
            width: 34, height: 34, alignItems: "center", justifyContent: "center",
            background: "none", border: "none", cursor: "pointer", zIndex: 999 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: t.txt2, borderRadius: 2,
                transition: "transform 0.3s, opacity 0.3s",
                transform: open ? i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none" : "none",
                opacity: open && i === 1 ? 0 : 1 }} />
          ))}
        </button>
      </div>
    </nav>
  );
}

function Hero({ dark, scrollTo }) {
  const t = T(dark);
  const typed = useTyping(DATA.roles);

  return (
    <section id="top" style={{ minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", padding: "5.5rem 0 3rem", background: t.bg, transition: "background 0.4s" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {[
          { w: 500, h: 500, top: "-10%", left: "-10%", color: "rgba(0,212,255,0.32)", d: 0 },
          { w: 420, h: 420, top: "20%", right: "3%", color: "rgba(124,58,237,0.28)", d: 3 },
          { w: 300, h: 300, bottom: "12%", left: "40%", color: "rgba(245,158,11,0.20)", d: 5 },
        ].map((o, i) => (
          <div key={i} style={{ position: "absolute", borderRadius: "50%", filter: "blur(90px)", opacity: 0.38,
              width: o.w, height: o.h, top: o.top, left: o.left, right: o.right, bottom: o.bottom,
              background: "radial-gradient(circle, " + o.color + ", transparent 70%)",
              animation: "floatOrb " + (9 + o.d) + "s ease-in-out infinite -" + o.d + "s" }} />
        ))}
        <div style={{ position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px" }} />
      </div>

      <div style={{ ...ctr(), position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontSize: "0.79rem", fontWeight: 500, letterSpacing: "0.05em",
            color: t.txt2, background: t.sur, border: "1px solid " + t.bdr,
            padding: "0.38rem 1rem", borderRadius: 50, marginBottom: "1.5rem", backdropFilter: "blur(8px)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e",
              boxShadow: "0 0 8px #22c55e", animation: "pulseDot 2s infinite" }} />
          Available for opportunities
        </div>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem,7vw,5rem)",
            fontWeight: 800, lineHeight: 1.05, marginBottom: "0.75rem", color: t.txt }}>
          {"Hi, I'm "}
          <span style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Vignesh Goud
          </span>
        </h1>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.2rem,3.5vw,1.9rem)",
            fontWeight: 600, color: t.txt2, marginBottom: "1.2rem", minHeight: "2.4rem" }}>
          <span style={{ color: t.acc }}>{typed}</span>
          <span style={{ display: "inline-block", color: t.acc, animation: "blink 1s step-end infinite", marginLeft: 2 }}>|</span>
        </h2>
        <p style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", color: t.txt2, maxWidth: 520, marginBottom: "2rem", lineHeight: 1.78 }}>
          Building scalable, secure, and client-facing web applications with clean, maintainable architecture.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2.2rem", flexWrap: "wrap" }}>
          {[["1+", "Year Experience"], ["3+", "Projects Built"], ["10+", "Technologies"]].map(([num, label], i) => (
            <React.Fragment key={label}>
              {i > 0 && <div style={{ width: 1, height: 38, background: t.bdr }} />}
              <div>
                <span style={{ display: "block", fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, color: t.acc }}>{num}</span>
                <span style={{ fontSize: "0.74rem", color: t.txt3, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2.2rem", flexWrap: "wrap", alignItems: "center" }}>
          <button style={btnP(t)} onClick={() => scrollTo("projects")}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,212,255,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            View My Work
          </button>
          <button style={btnS(t)} onClick={() => scrollTo("contact")}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.acc; e.currentTarget.style.color = t.acc; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.bdr; e.currentTarget.style.color = t.txt; e.currentTarget.style.transform = "none"; }}>
            {"Let's Connect"}
          </button>
          {/* ✅ HERO RESUME DOWNLOAD BUTTON */}
          <a href={RESUME_URL} target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.72rem 1.6rem", color: t.txt, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
              borderRadius: 8, border: "2px solid rgba(0,212,255,0.35)",
              background: "rgba(0,212,255,0.06)", cursor: "pointer", transition: "all 0.25s",
              textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.acc; e.currentTarget.style.color = t.acc; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(0,212,255,0.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)"; e.currentTarget.style.color = t.txt; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(0,212,255,0.06)"; }}>
            <IconDownload /> Resume
          </a>
        </div>
        <div style={{ display: "flex", gap: "0.65rem" }}>
          {[
            { Icon: IconGH, href: DATA.personal.github, label: "GitHub" },
            { Icon: IconLI, href: DATA.personal.linkedin, label: "LinkedIn" },
            { Icon: IconEM, href: "mailto:" + DATA.personal.email, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel="noreferrer" aria-label={label}
              style={{ width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center",
                  background: t.sur, border: "1px solid " + t.bdr, borderRadius: 10, color: t.txt2, transition: "all 0.22s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = t.acc; e.currentTarget.style.borderColor = t.acc; e.currentTarget.style.color = "#000"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = t.sur; e.currentTarget.style.borderColor = t.bdr; e.currentTarget.style.color = t.txt2; e.currentTarget.style.transform = "none"; }}>
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "2rem", right: "2.5rem", display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.4rem", color: t.txt3, fontSize: "0.68rem", letterSpacing: "0.12em",
          textTransform: "uppercase", writingMode: "vertical-rl", zIndex: 1 }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, " + t.acc + ", transparent)",
            animation: "scrollLine 2.2s ease-in-out infinite" }} />
        <span>Scroll</span>
      </div>
    </section>
  );
}

function About({ dark, scrollTo }) {
  const t = T(dark);
  const [ref, vis] = useReveal();
  return (
    <section id="about" style={sec(t.bg2)}>
      <div style={{ ...ctr(), ...revealStyle(vis) }} ref={ref}>
        <SecHdr tag="01 / About" title="Who Am I" t={t} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.65fr", gap: "clamp(2rem,6vw,5rem)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ position: "relative", width: 200, height: 200 }}>
              <div style={{ width: "100%", height: "100%", borderRadius: 28,
                  overflow: "hidden", position: "relative", zIndex: 1,
                  boxShadow: "0 20px 60px rgba(0,212,255,0.28)",
                  border: "3px solid rgba(0,212,255,0.35)" }}>
                {/* <img src={{Photo}} alt="Vignesh Goud"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} /> */}
                  <img
                  src={Photo}
                  alt="Vignesh Goud"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
              </div>
              {[{ i: -12, d: "0s", o: 1 }, { i: -24, d: "-2s", o: 0.5 }].map(({ i, d, o }) => (
                <div key={i} style={{ position: "absolute", top: i, left: i, right: i, bottom: i,
                    borderRadius: 38, border: "1px solid rgba(0,212,255,0.18)",
                    animation: "ringFloat 4s ease-in-out infinite " + d, opacity: o }} />
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", justifyContent: "center" }}>
              {["⚡ React.js", "🔧 Node.js", "🗄 MySQL", "🚀 REST APIs", "💳 Razorpay", "🛠 Express.js"].map((c) => (
                <span key={c} style={{ fontSize: "0.78rem", fontWeight: 500, padding: "0.28rem 0.7rem",
                    background: t.sur2, border: "1px solid " + t.bdr, borderRadius: 50, color: t.txt2 }}>{c}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.9rem", color: t.txt }}>
              Full Stack Developer based in India
            </h3>
            <p style={{ color: t.txt2, lineHeight: 1.82, marginBottom: "1.8rem", fontSize: "0.97rem" }}>
              {DATA.personal.summary}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", marginBottom: "1.8rem" }}>
              {[
                { icon: "🎯", strong: "Focus Areas", p: "Dashboard development, RESTful APIs, backend file systems, MySQL design" },
                { icon: "💼", strong: "Current Role", p: "Software Developer at 24hr7 Commerce Pvt. Ltd." },
                { icon: "🎓", strong: "Background", p: "B.Tech Mechanical Engineering turned Full Stack Developer" },
                { icon: "📍", strong: "Location", p: "India — open to remote & on-site opportunities" },
              ].map(({ icon, strong, p }) => (
                <div key={strong} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: "0.1rem" }}>{icon}</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, color: t.txt, marginBottom: "0.2rem" }}>{strong}</strong>
                    <p style={{ fontSize: "0.85rem", color: t.txt2 }}>{p}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
              <button style={btnP(t)} onClick={() => scrollTo("contact")}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,212,255,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                Get In Touch →
              </button>
              {/* ✅ ABOUT SECTION RESUME BUTTON */}
              <a href={RESUME_URL} target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  padding: "0.72rem 1.6rem", color: t.txt, fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
                  borderRadius: 8, border: "2px solid " + t.bdr, background: t.sur,
                  cursor: "pointer", transition: "all 0.25s", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.acc; e.currentTarget.style.color = t.acc; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.bdr; e.currentTarget.style.color = t.txt; e.currentTarget.style.transform = "none"; }}>
                <IconDownload /> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ dark }) {
  const t = T(dark);
  const [ref, vis] = useReveal();
  return (
    <section id="skills" style={sec(t.bg)}>
      <div style={{ ...ctr(), ...revealStyle(vis) }} ref={ref}>
        <SecHdr tag="02 / Skills" title="Technical Arsenal" t={t} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))", gap: "1.4rem" }}>
          {Object.entries(DATA.skills).map(([cat, { items, levels }]) => (
            <div key={cat} style={{ background: t.sur, border: "1px solid " + t.bdr, borderRadius: 16,
                padding: "1.75rem", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s", backdropFilter: "blur(8px)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = t.bdr; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.4rem" }}>
                <span style={{ fontSize: "1.45rem" }}>{cat.split(" ")[1] || ""}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: t.txt }}>{cat.split(" ")[0]}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {items.map((skill, i) => (
                  <div key={skill}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: t.txt2, marginBottom: "0.3rem" }}>
                      <span>{skill}</span>
                      <span style={{ fontSize: "0.73rem", color: t.acc, fontWeight: 600 }}>{levels[i]}%</span>
                    </div>
                    <div style={{ height: 4, background: t.bdr, borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "linear-gradient(90deg, #00d4ff, #7c3aed)", borderRadius: 4,
                          width: vis ? levels[i] + "%" : "0%", transition: "width 1.3s cubic-bezier(0.4,0,0.2,1) " + (i * 0.06) + "s" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjCard({ project, index, dark }) {
  const t = T(dark);
  const [ref, vis] = useReveal();
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref} style={{ background: t.sur, border: "1px solid " + (hovered ? "rgba(0,212,255,0.3)" : t.bdr),
        borderRadius: 20, padding: "1.85rem", position: "relative", overflow: "hidden", backdropFilter: "blur(8px)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s",
        transform: vis ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(36px)",
        opacity: vis ? 1 : 0,
        boxShadow: hovered ? "0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,212,255,0.18)" : "none" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, " + project.color + ", transparent)" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, color: t.bdr, lineHeight: 1 }}>0{index + 1}</span>
        <div style={{ display: "flex", gap: "0.45rem" }}>
          {/* ✅ PROJECT LIVE & CODE LINKS */}
          {[
            { Icon: IconLink, label: "Live", href: project.liveUrl, hBg: t.acc, hClr: "#000" },
            { Icon: IconCode, label: "Code", href: project.codeUrl, hBg: t.txt, hClr: t.bg },
          ].map(({ Icon, label, href, hBg, hClr }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.28rem",
                  fontSize: "0.78rem", fontWeight: 600, padding: "0.28rem 0.7rem",
                  borderRadius: 6, border: "1px solid " + t.bdr, color: t.txt2, transition: "all 0.2s", textDecoration: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = hBg; e.currentTarget.style.borderColor = hBg; e.currentTarget.style.color = hClr; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = t.bdr; e.currentTarget.style.color = t.txt2; }}>
              <Icon /> {label}
            </a>
          ))}
        </div>
      </div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.65rem", color: t.txt, lineHeight: 1.3 }}>{project.title}</h3>
      <p style={{ fontSize: "0.88rem", color: t.txt2, lineHeight: 1.72, marginBottom: "1.1rem" }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem", marginBottom: "1rem" }}>
        {project.stack.map((s) => (
          <span key={s} style={{ fontSize: "0.73rem", fontWeight: 600, padding: "0.22rem 0.58rem",
              background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: t.acc, borderRadius: 5 }}>{s}</span>
        ))}
      </div>
      {expanded && (
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.48rem", borderTop: "1px solid " + t.bdr, paddingTop: "0.9rem", marginBottom: "0.7rem", animation: "fadeUp 0.3s ease" }}>
          {project.details.map((detail, i) => (
            <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.84rem", color: t.txt2, lineHeight: 1.65 }}>
              <span style={{ color: t.acc, flexShrink: 0, fontSize: "0.72rem", marginTop: "0.2rem" }}>▸</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setExpanded((e) => !e)}
        style={{ fontSize: "0.8rem", fontWeight: 600, color: t.acc, background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", padding: 0 }}>
        {expanded ? "Show Less ↑" : "More Details ↓"}
      </button>
    </div>
  );
}

function Projects({ dark }) {
  const t = T(dark);
  const [ref, vis] = useReveal();
  return (
    <section id="projects" style={sec(t.bg2)}>
      <div style={{ ...ctr(), ...revealStyle(vis) }} ref={ref}>
        <SecHdr tag="03 / Projects" title="Featured Work" t={t} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "1.75rem" }}>
          {DATA.projects.map((p, i) => <ProjCard key={p.id} project={p} index={i} dark={dark} />)}
        </div>
      </div>
    </section>
  );
}

function Experience({ dark }) {
  const t = T(dark);
  const [ref, vis] = useReveal();
  return (
    <section id="experience" style={sec(t.bg)}>
      <div style={{ ...ctr(), ...revealStyle(vis) }} ref={ref}>
        <SecHdr tag="04 / Experience" title="Work History" t={t} />
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {DATA.experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: "1.4rem" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 13, height: 13, borderRadius: "50%", background: t.acc, border: "2px solid " + t.acc,
                    boxShadow: "0 0 12px rgba(0,212,255,0.55)", flexShrink: 0, marginTop: 5 }} />
                <div style={{ flex: 1, width: 2, background: t.bdr, margin: "4px 0" }} />
              </div>
              <div style={{ flex: 1, background: t.sur, border: "1px solid " + t.bdr, borderRadius: 16, padding: "1.7rem 1.9rem", marginBottom: "2rem", transition: "border-color 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.32)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.bdr; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem", gap: "1rem", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: t.txt, marginBottom: "0.22rem" }}>{exp.role}</div>
                    <div style={{ fontSize: "0.88rem", color: t.acc, fontWeight: 500 }}>{exp.company}</div>
                  </div>
                  <span style={{ fontSize: "0.78rem", color: "#22c55e", background: t.sur2, padding: "0.28rem 0.72rem",
                      borderRadius: 50, display: "flex", alignItems: "center", gap: "0.38rem", fontWeight: 500, whiteSpace: "nowrap" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", animation: "pulseDot 2s infinite" }} />
                    {exp.period}
                  </span>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.55rem", fontSize: "0.88rem", color: t.txt2, lineHeight: 1.68 }}>
                      <span style={{ color: t.acc, flexShrink: 0, fontSize: "0.82rem", marginTop: "0.05rem" }}>{"→"}</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education({ dark }) {
  const t = T(dark);
  const [ref, vis] = useReveal();
  return (
    <section id="education" style={sec(t.bg2)}>
      <div style={{ ...ctr(), ...revealStyle(vis) }} ref={ref}>
        <SecHdr tag="05 / Education" title="Academic Background" t={t} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: t.txt, marginBottom: "1.35rem", paddingBottom: "0.65rem", borderBottom: "1px solid " + t.bdr }}>Education</h3>
            {DATA.education.map((edu, i) => (
              <div key={i} style={{ display: "flex", gap: "0.9rem", background: t.sur, border: "1px solid " + t.bdr, borderRadius: 14, padding: "1.4rem", transition: "border-color 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.32)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.bdr; }}>
                <div style={{ fontSize: "1.85rem", flexShrink: 0 }}>🎓</div>
                <div>
                  <h4 style={{ fontSize: "0.97rem", fontWeight: 600, color: t.txt, marginBottom: "0.22rem" }}>{edu.degree}</h4>
                  <p style={{ fontSize: "0.85rem", color: t.txt2, marginBottom: "0.38rem" }}>{edu.institution}</p>
                  <span style={{ fontSize: "0.75rem", color: t.acc, fontWeight: 600, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", padding: "0.18rem 0.55rem", borderRadius: 50 }}>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ CERTIFICATIONS WITH CLICKABLE LINKS */}
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: t.txt, marginBottom: "1.35rem", paddingBottom: "0.65rem", borderBottom: "1px solid " + t.bdr }}>Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {DATA.certifications.map((cert, i) => (
                <a key={i} href={cert.link} target="_blank" rel="noreferrer"
                  style={{ display: "flex", gap: "0.85rem", alignItems: "center", background: t.sur, border: "1px solid " + t.bdr,
                      borderRadius: 12, padding: "0.92rem 1.15rem", transition: "border-color 0.3s, transform 0.2s",
                      textDecoration: "none", color: "inherit", cursor: "pointer" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.32)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.bdr; e.currentTarget.style.transform = "none"; }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>🏆</span>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: "block", fontSize: "0.87rem", color: t.txt, marginBottom: "0.12rem", fontWeight: 600 }}>{cert.title}</strong>
                    <p style={{ fontSize: "0.8rem", color: t.txt2 }}>{cert.issuer}</p>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: t.acc, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.22rem", whiteSpace: "nowrap" }}>
                    View ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ dark }) {
  const t = T(dark);
  const [ref, vis] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");
    setTimeout(() => { setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" }); }, 1400);
  };

  const inputSt = (hasErr) => ({
    background: t.bg, border: "1px solid " + (hasErr ? "#ef4444" : t.bdr),
    borderRadius: 8, padding: "0.7rem 0.95rem",
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
    color: t.txt, outline: "none", width: "100%", transition: "border-color 0.2s, box-shadow 0.2s",
  });

  const contacts = [
    { icon: "✉", label: "Email", value: DATA.personal.email, href: "mailto:" + DATA.personal.email },
    { icon: "📞", label: "Phone", value: DATA.personal.phone, href: "tel:" + DATA.personal.phone },
    { icon: "🔗", label: "LinkedIn", value: "Connect with me", href: DATA.personal.linkedin },
    { icon: "🐙", label: "GitHub", value: "View my repositories", href: DATA.personal.github },
  ];

  return (
    <section id="contact" style={sec(t.bg)}>
      <div style={{ ...ctr(), ...revealStyle(vis) }} ref={ref}>
        <SecHdr tag="06 / Contact" title="Let's Work Together" sub="Open to full-time roles, freelance projects, and collaborations." t={t} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.55fr", gap: "clamp(2rem,6vw,4rem)", alignItems: "start" }}>
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.35rem", color: t.txt }}>Reach Out Directly</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {contacts.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target={label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined} rel="noreferrer"
                  style={{ display: "flex", gap: "0.9rem", alignItems: "center", background: t.sur, border: "1px solid " + t.bdr,
                      borderRadius: 12, padding: "0.9rem 1.1rem", transition: "all 0.25s", color: t.txt, textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.bdr; e.currentTarget.style.transform = "none"; }}>
                  <span style={{ fontSize: "1.2rem", width: 40, height: 40, display: "flex", alignItems: "center",
                      justifyContent: "center", background: "rgba(0,212,255,0.08)", borderRadius: 10, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.83rem", fontWeight: 600, marginBottom: "0.12rem" }}>{label}</strong>
                    <p style={{ fontSize: "0.8rem", color: t.txt2 }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate
            style={{ display: "flex", flexDirection: "column", gap: "1.15rem", background: t.sur,
                border: "1px solid " + t.bdr, borderRadius: 20, padding: "2rem", backdropFilter: "blur(8px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.38rem" }}>
                <label style={{ fontSize: "0.8rem", fontWeight: 600, color: t.txt2 }}>Name *</label>
                <input style={inputSt(errors.name)} placeholder="Your full name" value={form.name}
                  onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: "" })); }}
                  onFocus={(e) => { e.target.style.borderColor = t.acc; e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.name ? "#ef4444" : t.bdr; e.target.style.boxShadow = "none"; }} />
                {errors.name && <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>{errors.name}</span>}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.38rem" }}>
                <label style={{ fontSize: "0.8rem", fontWeight: 600, color: t.txt2 }}>Email *</label>
                <input type="email" style={inputSt(errors.email)} placeholder="your@email.com" value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: "" })); }}
                  onFocus={(e) => { e.target.style.borderColor = t.acc; e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.email ? "#ef4444" : t.bdr; e.target.style.boxShadow = "none"; }} />
                {errors.email && <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>{errors.email}</span>}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.38rem" }}>
              <label style={{ fontSize: "0.8rem", fontWeight: 600, color: t.txt2 }}>Subject</label>
              <input style={inputSt(false)} placeholder="What's this about?" value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                onFocus={(e) => { e.target.style.borderColor = t.acc; e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)"; }}
                onBlur={(e) => { e.target.style.borderColor = t.bdr; e.target.style.boxShadow = "none"; }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.38rem" }}>
              <label style={{ fontSize: "0.8rem", fontWeight: 600, color: t.txt2 }}>Message *</label>
              <textarea rows={5} style={{ ...inputSt(errors.message), resize: "vertical" }}
                placeholder="Tell me about your project or opportunity..." value={form.message}
                onChange={(e) => { setForm((f) => ({ ...f, message: e.target.value })); setErrors((er) => ({ ...er, message: "" })); }}
                onFocus={(e) => { e.target.style.borderColor = t.acc; e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)"; }}
                onBlur={(e) => { e.target.style.borderColor = errors.message ? "#ef4444" : t.bdr; e.target.style.boxShadow = "none"; }} />
              {errors.message && <span style={{ fontSize: "0.75rem", color: "#ef4444" }}>{errors.message}</span>}
            </div>
            {status === "success" && (
              <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 8, padding: "0.72rem 0.95rem", fontSize: "0.88rem", color: "#22c55e" }}>
                ✅ Message sent! I will get back to you soon.
              </div>
            )}
            <button type="submit" disabled={status === "sending"}
              style={{ ...btnP(t), justifyContent: "center", padding: "0.82rem", width: "100%",
                  opacity: status === "sending" ? 0.6 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
              onMouseEnter={(e) => { if (status !== "sending") { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,212,255,0.35)"; } }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ dark }) {
  const t = T(dark);
  return (
    <footer style={{ background: t.bg2, borderTop: "1px solid " + t.bdr, padding: "2.4rem 0", transition: "background 0.4s" }}>
      <div style={ctr()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.28rem", fontWeight: 800, color: t.txt }}>
            <span style={{ color: t.acc, fontSize: "1.48rem" }}>V</span>ignesh<span style={{ color: t.acc }}>.</span>
          </div>
          <p style={{ fontSize: "0.88rem", color: t.txt2 }}>Building the web, one component at a time. 🚀</p>
        </div>
        <div style={{ height: 1, background: t.bdr, marginBottom: "1.3rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.83rem", color: t.txt3 }}>{"© " + new Date().getFullYear() + " Vignesh Goud — Crafted with ❤️ using React.js"}</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontSize: "0.82rem", fontWeight: 600, color: t.acc, border: "1px solid rgba(0,212,255,0.3)",
                padding: "0.38rem 0.88rem", borderRadius: 6, transition: "all 0.2s", background: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = t.acc; e.currentTarget.style.color = "#000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = t.acc; }}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function Port() {
  const [dark, setDark] = useState(true);
  const t = T(dark);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: t.bg, color: t.txt, transition: "background 0.4s, color 0.4s" }}>
        <Navbar dark={dark} toggleTheme={() => setDark((d) => !d)} scrollTo={scrollTo} />
        <Hero dark={dark} scrollTo={scrollTo} />
        <About dark={dark} scrollTo={scrollTo} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Experience dark={dark} />
        <Education dark={dark} />
        <Contact dark={dark} />
        <Footer dark={dark} />
      </div>
    </>
  );
}
















