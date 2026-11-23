/* =========================================================
   localStorage 관리
   - 저장 오류 또는 손상된 데이터가 있어도 사이트가 계속 열리도록 처리합니다.
   ========================================================= */

const StudyStorage = (() => {
  const KEYS = Object.freeze({
    lastView: "securityStudy.lastView",
    lastSection: "securityStudy.lastSection",
    openParts: "securityStudy.openParts",
    theme: "securityStudy.theme",
    activeTab: "securityStudy.activeTab",
    questionIndex: "securityStudy.questionIndex",
    questionStates: "securityStudy.questionStates",
    questionPart: "securityStudy.questionPart",
    questionSection: "securityStudy.questionSection",
    questionOpenParts: "securityStudy.questionOpenParts",
    questionDifficulty: "securityStudy.questionDifficulty",
    questionSectionPositions: "securityStudy.questionSectionPositions",
    savedQuestions: "securityStudy.savedQuestions",
    favoriteQuestions: "securityStudy.favoriteQuestions",
    sectionMemos: "securityStudy.sectionMemos"
  });

  function read(key, fallback = null) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch (error) {
      console.warn("저장된 설정을 읽지 못했습니다.", error);
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn("설정을 저장하지 못했습니다.", error);
      return false;
    }
  }

  function getOpenParts() {
    try {
      const value = JSON.parse(read(KEYS.openParts, "[]"));
      if (!Array.isArray(value)) return [];
      return value
        .map(Number)
        .filter((part) => Number.isInteger(part) && part >= 1 && part <= 7);
    } catch {
      return [];
    }
  }

  function getQuestionIndex(total) {
    const value = Number(read(KEYS.questionIndex, "0"));
    if (!Number.isInteger(value) || value < 0 || value >= total) return 0;
    return value;
  }

  function getQuestionStates() {
    try {
      const value = JSON.parse(read(KEYS.questionStates, "{}"));
      return value && typeof value === "object" && !Array.isArray(value) ? value : {};
    } catch {
      return {};
    }
  }

  function getQuestionSectionPositions() {
    try {
      const value = JSON.parse(read(KEYS.questionSectionPositions, "{}"));
      if (!value || typeof value !== "object" || Array.isArray(value)) return {};
      return Object.fromEntries(
        Object.entries(value).filter(([key, questionId]) =>
          typeof key === "string" && typeof questionId === "string" && questionId.trim()
        )
      );
    } catch {
      return {};
    }
  }

  function getSavedQuestions() {
    try {
      const value = JSON.parse(read(KEYS.savedQuestions, "[]"));
      if (!Array.isArray(value)) return [];
      return value.filter((id) => typeof id === "string" && id.trim());
    } catch {
      return [];
    }
  }

  function getFavoriteQuestions() {
    try {
      const value = JSON.parse(read(KEYS.favoriteQuestions, "[]"));
      if (!Array.isArray(value)) return [];
      return value.filter((id) => typeof id === "string" && id.trim());
    } catch {
      return [];
    }
  }

  function getSectionMemos() {
    try {
      const value = JSON.parse(read(KEYS.sectionMemos, "{}"));
      if (!value || typeof value !== "object" || Array.isArray(value)) return {};
      return Object.fromEntries(
        Object.entries(value).filter(([key, memo]) => typeof key === "string" && typeof memo === "string")
      );
    } catch {
      return {};
    }
  }

  function getQuestionPart(fallback = 1) {
    const value = Number(read(KEYS.questionPart, String(fallback)));
    return Number.isInteger(value) && value >= 1 && value <= 7 ? value : fallback;
  }

  function getQuestionSection(fallback = 1) {
    const value = Number(read(KEYS.questionSection, String(fallback)));
    return Number.isInteger(value) && value >= 1 && value <= 43 ? value : fallback;
  }

  function getQuestionOpenParts(fallbackPart = 1) {
    try {
      const value = JSON.parse(read(KEYS.questionOpenParts, JSON.stringify([fallbackPart])));
      if (!Array.isArray(value)) return [fallbackPart];
      return value
        .map(Number)
        .filter((part) => Number.isInteger(part) && part >= 1 && part <= 7);
    } catch {
      return [fallbackPart];
    }
  }

  return {
    getLastView: () => read(KEYS.lastView, "home"),
    setLastView: (view) => write(KEYS.lastView, view === "section" ? "section" : "home"),
    getLastSection: () => read(KEYS.lastSection, null),
    setLastSection: (sectionId) => write(KEYS.lastSection, sectionId),
    getOpenParts,
    setOpenParts: (parts) => write(KEYS.openParts, JSON.stringify([...parts].sort((a, b) => a - b))),
    getTheme: () => read(KEYS.theme, "light"),
    setTheme: (theme) => write(KEYS.theme, theme === "dark" ? "dark" : "light"),
    getActiveTab: () => read(KEYS.activeTab, "summary"),
    setActiveTab: (tab) => write(KEYS.activeTab, tab === "questions" ? "questions" : "summary"),
    getQuestionIndex,
    setQuestionIndex: (index) => write(KEYS.questionIndex, String(index)),
    getQuestionStates,
    setQuestionStates: (states) => write(KEYS.questionStates, JSON.stringify(states)),
    getQuestionSectionPositions,
    setQuestionSectionPositions: (positions) => write(KEYS.questionSectionPositions, JSON.stringify(positions)),
    getQuestionPart,
    setQuestionPart: (part) => write(KEYS.questionPart, String(Number(part))),
    getQuestionSection,
    setQuestionSection: (section) => write(KEYS.questionSection, String(Number(section))),
    getQuestionOpenParts,
    setQuestionOpenParts: (parts) => write(KEYS.questionOpenParts, JSON.stringify([...parts].sort((a, b) => a - b))),
    getQuestionDifficulty: () => read(KEYS.questionDifficulty, "normal") === "hard" ? "hard" : "normal",
    setQuestionDifficulty: (difficulty) => write(KEYS.questionDifficulty, difficulty === "hard" ? "hard" : "normal"),
    getSavedQuestions,
    setSavedQuestions: (ids) => write(KEYS.savedQuestions, JSON.stringify([...new Set(ids)])),
    getFavoriteQuestions,
    setFavoriteQuestions: (ids) => write(KEYS.favoriteQuestions, JSON.stringify([...new Set(ids)])),
    getSectionMemos,
    setSectionMemos: (memos) => write(KEYS.sectionMemos, JSON.stringify(memos))
  };
})();
