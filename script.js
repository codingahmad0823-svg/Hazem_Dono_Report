const DEFAULT_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbycIqR8pm2i9StuwjeUo4G6CHpZjBxj1g67nbXPOHZ0Q_SueAacSnHzBuPXG5F7Y5q7/exec";
const LANGUAGE_STORAGE_KEY = "hazem_donor_language";
const ADMIN_ROLE = "admin";
const USER_ROLE = "user";
// 0-based indexes => columns 3 and 12 in the sheet.
const KEEP_EMPTY_COLUMN_INDEXES = [2, 11];

const TRANSLATIONS = {
  en: {
    authEyebrow: "Secure Access",
    authTitle: "Sign In",
    authDesc: "Sign in to continue. New users can create an account.",
    authModeAria: "Authentication mode",
    loginTab: "Login",
    signupTab: "Create Account",
    usernameLabel: "Username",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    loginBtn: "Login",
    signupBtn: "Create Account",
    continueGuestBtn: "Continue as Guest",
    logoutBtn: "Logout",
    signingIn: "Signing in...",
    creatingAccount: "Creating account...",
    enterUsernamePassword: "Enter username and password",
    passwordsMismatch: "Passwords do not match",
    accountCreated: "Account created. You can now sign in.",
    accountCreateFailed: "Could not create account",
    loginFailed: "Could not sign in",
    loggedOut: "Logged out",
    adminOnlyPage: "Admin access required.",
    sessionAdminLabel: "Admin • {username}",
    sessionUserLabel: "User • {username}",
    sessionGuestLabel: "Guest",
    eyebrow: "Donor Workspace",
    appTitle: "Hazem Donor Report",
    pagesAria: "Pages",
    dashboardTab: "Dashboard",
    adminTab: "Admin",
    settingsBtn: "Settings",
    searchAria: "Search donors",
    searchLabel: "Search by name or student ID",
    searchPlaceholder: "Search by name or student ID",
    clearBtn: "Clear",
    showingAllRows: "Showing all {total} rows",
    showingFilteredRows: "Showing {matched} of {total} rows for \"{query}\"",
    dashboardTitle: "Dashboard",
    adminTitle: "Admin",
    adminDesc: "Account No. 1 is the primary admin. Admins can promote other accounts.",
    adminPagesAria: "Admin pages",
    adminDonorsTab: "Donors",
    adminAccountsTab: "Accounts",
    adminMode: "Admin Mode",
    quickActions: "Quick actions",
    refreshData: "Refresh Data",
    undoDelete: "Undo Delete",
    refreshAccounts: "Refresh Accounts",
    accountsTitle: "Accounts",
    accountsDesc: "Passwords are hidden. Use actions to grant or remove admin access.",
    accountsActionsHeader: "Admin Access",
    makeAdminBtn: "Make Admin",
    removeAdminBtn: "Remove Admin",
    primaryAdminTag: "Primary Admin",
    addRowTitle: "Add Row",
    addRowDesc: "Fill in each column. Keep columns 3 and 12 empty.",
    addRowBtn: "Add Row",
    editRowTitle: "Edit Row",
    closeBtn: "Close",
    saveChangesBtn: "Save Changes",
    settingsTitle: "Settings",
    settingsPageTitle: "Settings",
    settingsPageDesc: "Customize language and visuals for this browser only.",
    settingsLanguageTitle: "Language",
    settingsLanguageDesc: "Choose your interface language.",
    settingsEffectsTitle: "Visual Effects",
    settingsEffectsDesc: "Standard hover effects are applied across the site.",
    settingsPreviewTitle: "Live Preview",
    settingsPreviewDesc: "Hover these elements to preview the current style.",
    previewGhostBtn: "Ghost Button",
    previewPrimaryBtn: "Primary Button",
    previewTile: "Glass card preview",
    languageLabel: "Language",
    settingsLanguageAria: "Language settings",
    languageOptionsAria: "Language options",
    settingsNote: "Only applies on this browser.",
    saveSettingsBtn: "Save Settings",
    langEnglish: "English",
    langArabic: "العربية",
    actionsHeader: "Actions",
    editBtn: "Edit",
    deleteBtn: "Delete",
    statusYes: "Yes",
    statusNo: "No",
    selectStatus: "Select status",
    keepEmptyHint: "Keep this empty",
    keepEmptyPlaceholder: "Keep empty",
    connected: "Connected",
    connectionIssue: "Connection issue",
    syncing: "Syncing...",
    loadingDashboard: "Loading dashboard...",
    loadingAdmin: "Loading admin grid...",
    loadingAccounts: "Loading accounts...",
    updatingAdmin: "Updating...",
    unableLoadDashboard: "Unable to load dashboard data.",
    unableLoadAdmin: "Unable to load admin data.",
    unableLoadAccounts: "Unable to load accounts data.",
    noColumns: "No columns found.",
    noData: "No data available.",
    noAccountsData: "No accounts data available.",
    noMatch: "No matching records for your search.",
    unlockAdminToManage: "Admin access is required to manage donor rows.",
    noHeadersYet: "No column headers available yet.",
    noColumnsAvailable: "No columns available yet",
    fillOneField: "Fill at least one field before adding",
    selectPaidStatus: "Select Yes or No for payment status",
    adding: "Adding...",
    addFailed: "Add failed",
    rowAdded: "Row added",
    networkAdd: "Network error while adding row",
    invalidRowIndex: "Invalid row index",
    confirmDelete: "Delete row {row}?",
    deleteFailed: "Delete failed",
    rowDeletedUndo: "Row deleted. Use Undo Delete to restore.",
    networkDelete: "Network error while deleting row",
    rowNotFound: "Row not found",
    editingRow: "Editing row {row}",
    noRowSelected: "No row selected for editing",
    saving: "Saving...",
    editFailed: "Edit failed",
    rowUpdated: "Row updated",
    networkEdit: "Network error while editing row",
    confirmUndo: "Restore the last deleted row?",
    undoFailed: "Undo failed",
    undoSuccess: "Last deleted row restored",
    networkUndo: "Network error while restoring row",
    unlockAdminFirst: "Admin access required",
    settingsSaved: "Settings saved for this user",
    adminUpdated: "Account admin access updated",
    adminUpdateFailed: "Could not update admin access"
  },
  ar: {
    authEyebrow: "وصول آمن",
    authTitle: "تسجيل الدخول",
    authDesc: "سجّل الدخول للمتابعة. يمكن للمستخدم الجديد إنشاء حساب.",
    authModeAria: "وضع المصادقة",
    loginTab: "دخول",
    signupTab: "إنشاء حساب",
    usernameLabel: "اسم المستخدم",
    passwordLabel: "كلمة المرور",
    confirmPasswordLabel: "تأكيد كلمة المرور",
    loginBtn: "دخول",
    signupBtn: "إنشاء حساب",
    continueGuestBtn: "المتابعة كضيف",
    logoutBtn: "تسجيل الخروج",
    signingIn: "جارٍ تسجيل الدخول...",
    creatingAccount: "جارٍ إنشاء الحساب...",
    enterUsernamePassword: "أدخل اسم المستخدم وكلمة المرور",
    passwordsMismatch: "كلمتا المرور غير متطابقتين",
    accountCreated: "تم إنشاء الحساب. يمكنك تسجيل الدخول الآن.",
    accountCreateFailed: "تعذّر إنشاء الحساب",
    loginFailed: "تعذّر تسجيل الدخول",
    loggedOut: "تم تسجيل الخروج",
    adminOnlyPage: "مطلوب وصول إداري.",
    sessionAdminLabel: "مدير • {username}",
    sessionUserLabel: "مستخدم • {username}",
    sessionGuestLabel: "ضيف",
    eyebrow: "مساحة المتبرعين",
    appTitle: "تقرير متبرعي حازم",
    pagesAria: "الصفحات",
    dashboardTab: "لوحة البيانات",
    adminTab: "الإدارة",
    settingsBtn: "الإعدادات",
    searchAria: "البحث في المتبرعين",
    searchLabel: "ابحث بالاسم أو رقم الطالب",
    searchPlaceholder: "ابحث بالاسم أو رقم الطالب",
    clearBtn: "مسح",
    showingAllRows: "عرض كل الصفوف: {total}",
    showingFilteredRows: "عرض {matched} من {total} للبحث \"{query}\"",
    dashboardTitle: "لوحة البيانات",
    adminTitle: "الإدارة",
    adminDesc: "الحساب رقم 1 هو المدير الأساسي، ويمكن للمديرين ترقية حسابات أخرى.",
    adminPagesAria: "صفحات الإدارة",
    adminDonorsTab: "المتبرعون",
    adminAccountsTab: "الحسابات",
    adminMode: "وضع الإدارة",
    quickActions: "إجراءات سريعة",
    refreshData: "تحديث البيانات",
    undoDelete: "التراجع عن الحذف",
    refreshAccounts: "تحديث الحسابات",
    accountsTitle: "الحسابات",
    accountsDesc: "كلمات المرور مخفية. استخدم الأزرار لمنح أو إزالة صلاحية الإدارة.",
    accountsActionsHeader: "صلاحية الإدارة",
    makeAdminBtn: "تعيين مدير",
    removeAdminBtn: "إلغاء المدير",
    primaryAdminTag: "المدير الأساسي",
    addRowTitle: "إضافة صف",
    addRowDesc: "املأ الأعمدة واترك العمودين 3 و12 فارغين.",
    addRowBtn: "إضافة صف",
    editRowTitle: "تعديل الصف",
    closeBtn: "إغلاق",
    saveChangesBtn: "حفظ التغييرات",
    settingsTitle: "الإعدادات",
    settingsPageTitle: "الإعدادات",
    settingsPageDesc: "خصّص اللغة والمظهر لهذا المتصفح فقط.",
    settingsLanguageTitle: "اللغة",
    settingsLanguageDesc: "اختر لغة الواجهة.",
    settingsEffectsTitle: "التأثيرات البصرية",
    settingsEffectsDesc: "تأثيرات المرور القياسية مفعّلة في الموقع.",
    settingsPreviewTitle: "معاينة مباشرة",
    settingsPreviewDesc: "مرر المؤشر على العناصر لمعاينة النمط الحالي.",
    previewGhostBtn: "زر شفاف",
    previewPrimaryBtn: "زر أساسي",
    previewTile: "معاينة بطاقة زجاجية",
    languageLabel: "اللغة",
    settingsLanguageAria: "إعدادات اللغة",
    languageOptionsAria: "خيارات اللغة",
    settingsNote: "يُطبَّق فقط على هذا المتصفح.",
    saveSettingsBtn: "حفظ الإعدادات",
    langEnglish: "English",
    langArabic: "العربية",
    actionsHeader: "الإجراءات",
    editBtn: "تعديل",
    deleteBtn: "حذف",
    statusYes: "نعم",
    statusNo: "لا",
    selectStatus: "اختر الحالة",
    keepEmptyHint: "اترك هذا الحقل فارغًا",
    keepEmptyPlaceholder: "اتركه فارغًا",
    connected: "متصل",
    connectionIssue: "مشكلة في الاتصال",
    syncing: "جاري المزامنة...",
    loadingDashboard: "جاري تحميل لوحة البيانات...",
    loadingAdmin: "جاري تحميل جدول الإدارة...",
    loadingAccounts: "جاري تحميل الحسابات...",
    updatingAdmin: "جارٍ التحديث...",
    unableLoadDashboard: "تعذر تحميل بيانات لوحة البيانات.",
    unableLoadAdmin: "تعذر تحميل بيانات الإدارة.",
    unableLoadAccounts: "تعذر تحميل بيانات الحسابات.",
    noColumns: "لا توجد أعمدة.",
    noData: "لا توجد بيانات.",
    noAccountsData: "لا توجد بيانات حسابات.",
    noMatch: "لا توجد نتائج مطابقة للبحث.",
    unlockAdminToManage: "مطلوب وصول الإدارة لإدارة الصفوف.",
    noHeadersYet: "لا توجد رؤوس أعمدة بعد.",
    noColumnsAvailable: "لا توجد أعمدة متاحة بعد",
    fillOneField: "املأ حقلاً واحدًا على الأقل قبل الإضافة",
    selectPaidStatus: "اختر نعم أو لا لحالة الدفع",
    adding: "جارٍ الإضافة...",
    addFailed: "فشلت الإضافة",
    rowAdded: "تمت إضافة الصف",
    networkAdd: "خطأ شبكة أثناء إضافة الصف",
    invalidRowIndex: "رقم الصف غير صالح",
    confirmDelete: "حذف الصف {row}؟",
    deleteFailed: "فشل الحذف",
    rowDeletedUndo: "تم حذف الصف. استخدم التراجع للاستعادة.",
    networkDelete: "خطأ شبكة أثناء حذف الصف",
    rowNotFound: "الصف غير موجود",
    editingRow: "تعديل الصف {row}",
    noRowSelected: "لا يوجد صف محدد للتعديل",
    saving: "جارٍ الحفظ...",
    editFailed: "فشل التعديل",
    rowUpdated: "تم تحديث الصف",
    networkEdit: "خطأ شبكة أثناء تعديل الصف",
    confirmUndo: "استعادة آخر صف تم حذفه؟",
    undoFailed: "فشل التراجع",
    undoSuccess: "تمت استعادة آخر صف محذوف",
    networkUndo: "خطأ شبكة أثناء الاستعادة",
    unlockAdminFirst: "مطلوب وصول الإدارة",
    settingsSaved: "تم حفظ الإعدادات لهذا المستخدم",
    adminUpdated: "تم تحديث صلاحية الإدارة للحساب",
    adminUpdateFailed: "تعذر تحديث صلاحية الإدارة"
  }
};

const isAppsScriptOrigin =
  window.location.hostname.includes("script.google.com") ||
  window.location.hostname.includes("googleusercontent.com");

const WEB_APP_URL =
  window.WEB_APP_URL ||
  (isAppsScriptOrigin ? window.location.href.split("?")[0] : DEFAULT_WEB_APP_URL);

const ui = {
  authScreen: document.getElementById("auth-screen"),
  appShell: document.getElementById("app-shell"),
  authEyebrow: document.getElementById("auth-eyebrow"),
  authTitle: document.getElementById("auth-title"),
  authDesc: document.getElementById("auth-desc"),
  authModeTabs: document.getElementById("auth-mode-tabs"),
  loginTabBtn: document.getElementById("auth-login-tab"),
  signupTabBtn: document.getElementById("auth-signup-tab"),
  loginForm: document.getElementById("login-form"),
  signupForm: document.getElementById("signup-form"),
  loginUsernameLabel: document.getElementById("login-username-label"),
  loginPasswordLabel: document.getElementById("login-password-label"),
  signupUsernameLabel: document.getElementById("signup-username-label"),
  signupPasswordLabel: document.getElementById("signup-password-label"),
  signupConfirmLabel: document.getElementById("signup-confirm-label"),
  loginUsernameInput: document.getElementById("login-username"),
  loginPasswordInput: document.getElementById("login-password"),
  signupUsernameInput: document.getElementById("signup-username"),
  signupPasswordInput: document.getElementById("signup-password"),
  signupConfirmInput: document.getElementById("signup-confirm"),
  loginBtn: document.getElementById("login-btn"),
  signupBtn: document.getElementById("signup-btn"),
  continueGuestBtn: document.getElementById("continue-guest-btn"),
  pageTabs: Array.from(document.querySelectorAll(".page-tab[data-page]")),
  pageSections: Array.from(document.querySelectorAll(".page-section")),
  pageNav: document.getElementById("page-nav"),
  dashboardTabBtn: document.getElementById("dashboard-tab-btn"),
  adminTabBtn: document.getElementById("admin-tab-btn"),
  settingsTabBtn: document.getElementById("settings-tab-btn"),
  adminSubnav: document.getElementById("admin-subnav"),
  adminViewButtons: Array.from(document.querySelectorAll(".admin-subtab[data-admin-view]")),
  adminDonorsViewBtn: document.getElementById("admin-donors-view-btn"),
  adminAccountsViewBtn: document.getElementById("admin-accounts-view-btn"),
  adminDonorsView: document.getElementById("admin-donors-view"),
  adminAccountsView: document.getElementById("admin-accounts-view"),
  sessionUserPill: document.getElementById("session-user-pill"),
  logoutBtn: document.getElementById("logout-btn"),
  eyebrowText: document.getElementById("eyebrow-text"),
  appTitle: document.getElementById("app-title"),
  dashboardTitle: document.getElementById("dashboard-title"),
  adminTitle: document.getElementById("admin-title"),
  adminDesc: document.getElementById("admin-desc"),
  settingsPageTitle: document.getElementById("settings-page-title"),
  settingsPageDesc: document.getElementById("settings-page-desc"),
  settingsLanguageTitle: document.getElementById("settings-language-title"),
  settingsLanguageDesc: document.getElementById("settings-language-desc"),
  settingsEffectsTitle: document.getElementById("settings-effects-title"),
  settingsEffectsDesc: document.getElementById("settings-effects-desc"),
  settingsPreviewTitle: document.getElementById("settings-preview-title"),
  settingsPreviewDesc: document.getElementById("settings-preview-desc"),
  dashboardTableWrap: document.getElementById("dashboard-table-wrap"),
  adminTableWrap: document.getElementById("admin-table-wrap"),
  adminContent: document.getElementById("admin-content"),
  refreshBtn: document.getElementById("refresh-btn"),
  undoBtn: document.getElementById("undo-btn"),
  adminBadge: document.getElementById("admin-badge"),
  quickActionsLabel: document.getElementById("quick-actions-label"),
  refreshAccountsBtn: document.getElementById("refresh-accounts-btn"),
  accountsTitle: document.getElementById("accounts-title"),
  accountsDesc: document.getElementById("accounts-desc"),
  accountsTableWrap: document.getElementById("accounts-table-wrap"),
  addRowTitle: document.getElementById("add-row-title"),
  addRowDesc: document.getElementById("add-row-desc"),
  addRowBtn: document.getElementById("add-row-btn"),
  clearAddRowBtn: document.getElementById("clear-add-row-btn"),
  addRowFields: document.getElementById("add-row-fields"),
  flash: document.getElementById("flash"),
  connectionPill: document.getElementById("connection-pill"),
  searchShell: document.getElementById("search-shell"),
  tableSearchLabel: document.getElementById("table-search-label"),
  tableSearchInput: document.getElementById("table-search"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  searchMeta: document.getElementById("search-meta"),
  settingsLanguageButtons: document.getElementById("settings-language-buttons"),
  settingsLangEnBtn: document.getElementById("settings-lang-en-btn"),
  settingsLangArBtn: document.getElementById("settings-lang-ar-btn"),
  editModal: document.getElementById("edit-modal"),
  editModalTitle: document.getElementById("edit-modal-title"),
  closeEditModalBtn: document.getElementById("close-edit-modal-btn"),
  editRowLabel: document.getElementById("edit-row-label"),
  editRowFields: document.getElementById("edit-row-fields"),
  saveEditBtn: document.getElementById("save-edit-btn"),
  settingsNote: document.getElementById("settings-note"),
  previewGhostBtn: document.getElementById("preview-ghost-btn"),
  previewPrimaryBtn: document.getElementById("preview-primary-btn"),
  previewTile: document.getElementById("preview-tile")
};

const state = {
  data: [],
  headers: [],
  paidColumnIndex: -1,
  currentUser: null,
  authMode: "login",
  adminView: "donors",
  isAdminUnlocked: false,
  adminPassword: "",
  accountsData: [],
  editingRowIndex: null,
  searchQuery: "",
  connectionStatus: "syncing",
  language: getInitialLanguage(),
  activePage: "dashboard-page"
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  applyLanguage(state.language);
  bindEvents();
  showAuthScreen();
}

function bindEvents() {
  ui.pageTabs.forEach((tab) => {
    tab.addEventListener("click", () => activatePage(tab.dataset.page));
  });

  ui.adminViewButtons.forEach((button) => {
    button.addEventListener("click", () => setAdminView(button.dataset.adminView));
  });

  if (ui.authModeTabs) {
    ui.authModeTabs.addEventListener("click", onAuthModeTabClick);
  }

  if (ui.loginForm) {
    ui.loginForm.addEventListener("submit", onLoginSubmit);
  }

  if (ui.signupForm) {
    ui.signupForm.addEventListener("submit", onSignupSubmit);
  }

  if (ui.continueGuestBtn) {
    ui.continueGuestBtn.addEventListener("click", continueAsGuest);
  }

  if (ui.logoutBtn) {
    ui.logoutBtn.addEventListener("click", logoutUser);
  }

  if (ui.settingsLanguageButtons) {
    ui.settingsLanguageButtons.addEventListener("click", onLanguageButtonClick);
  }

  if (ui.addRowBtn) ui.addRowBtn.addEventListener("click", onAddRow);
  if (ui.clearAddRowBtn) ui.clearAddRowBtn.addEventListener("click", clearAddRowFields);
  if (ui.refreshBtn) ui.refreshBtn.addEventListener("click", loadData);
  if (ui.refreshAccountsBtn) ui.refreshAccountsBtn.addEventListener("click", loadAccounts);
  if (ui.accountsTableWrap) {
    ui.accountsTableWrap.addEventListener("click", onAccountsTableClick);
  }
  if (ui.undoBtn) ui.undoBtn.addEventListener("click", onUndoDelete);
  if (ui.tableSearchInput) ui.tableSearchInput.addEventListener("input", onSearchChange);
  if (ui.clearSearchBtn) ui.clearSearchBtn.addEventListener("click", clearSearch);

  if (ui.saveEditBtn) ui.saveEditBtn.addEventListener("click", onSaveEdit);
  if (ui.closeEditModalBtn) ui.closeEditModalBtn.addEventListener("click", closeEditModal);
  if (ui.editModal) {
    ui.editModal.addEventListener("click", (ev) => {
      if (ev.target && ev.target.dataset && ev.target.dataset.closeModal === "true") {
        closeEditModal();
      }
    });
  }

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      if (ui.editModal && !ui.editModal.classList.contains("hidden")) closeEditModal();
    }
  });
}

function activatePage(pageId, options) {
  const silent = options && options.silent;
  let targetPageId = pageId;

  if (targetPageId === "admin-page" && !isAdminUser()) {
    targetPageId = "dashboard-page";
    if (!silent) {
      showFlash(t("adminOnlyPage"), "error");
    }
  }

  state.activePage = targetPageId;

  ui.pageSections.forEach((section) => {
    section.classList.toggle("hidden", section.id !== targetPageId);
  });

  ui.pageTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.page === targetPageId);
  });

  if (targetPageId === "admin-page") {
    setAdminView(state.adminView || "donors", { silent: true });
  }
}

function isAdminUser() {
  return Boolean(state.currentUser && state.currentUser.role === ADMIN_ROLE);
}

function setAdminView(view, options) {
  const silent = options && options.silent;
  const nextView = view === "accounts" ? "accounts" : "donors";

  if (!isAdminUser()) {
    state.adminView = "donors";
    if (!silent) showFlash(t("adminOnlyPage"), "error");
    return;
  }

  state.adminView = nextView;

  if (ui.adminDonorsView) {
    ui.adminDonorsView.classList.toggle("hidden", nextView !== "donors");
  }
  if (ui.adminAccountsView) {
    ui.adminAccountsView.classList.toggle("hidden", nextView !== "accounts");
  }

  ui.adminViewButtons.forEach((button) => {
    const active = button.dataset.adminView === nextView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  if (nextView === "accounts" && state.accountsData.length === 0) {
    loadAccounts();
  }
}

function onAuthModeTabClick(ev) {
  const button = ev.target.closest(".auth-tab");
  if (!button) return;

  const mode = button.dataset.mode === "signup" ? "signup" : "login";
  setAuthMode(mode);
}

function setAuthMode(mode) {
  state.authMode = mode === "signup" ? "signup" : "login";
  const loginMode = state.authMode === "login";

  if (ui.loginTabBtn) {
    ui.loginTabBtn.classList.toggle("active", loginMode);
    ui.loginTabBtn.setAttribute("aria-selected", loginMode ? "true" : "false");
  }
  if (ui.signupTabBtn) {
    ui.signupTabBtn.classList.toggle("active", !loginMode);
    ui.signupTabBtn.setAttribute("aria-selected", loginMode ? "false" : "true");
  }

  if (ui.loginForm) ui.loginForm.classList.toggle("hidden", !loginMode);
  if (ui.signupForm) ui.signupForm.classList.toggle("hidden", loginMode);
}

function clearAuthFields() {
  if (ui.loginUsernameInput) ui.loginUsernameInput.value = "";
  if (ui.loginPasswordInput) ui.loginPasswordInput.value = "";
  if (ui.signupUsernameInput) ui.signupUsernameInput.value = "";
  if (ui.signupPasswordInput) ui.signupPasswordInput.value = "";
  if (ui.signupConfirmInput) ui.signupConfirmInput.value = "";
}

function showAuthScreen() {
  if (ui.authScreen) ui.authScreen.classList.remove("hidden");
  if (ui.appShell) ui.appShell.classList.add("hidden");

  state.currentUser = null;
  state.isAdminUnlocked = false;
  state.adminPassword = "";
  state.adminView = "donors";
  state.accountsData = [];
  state.editingRowIndex = null;
  state.searchQuery = "";
  state.activePage = "dashboard-page";
  state.data = [];
  state.headers = [];
  state.paidColumnIndex = -1;

  if (ui.tableSearchInput) ui.tableSearchInput.value = "";
  if (ui.adminTabBtn) ui.adminTabBtn.hidden = false;
  if (ui.dashboardTableWrap) ui.dashboardTableWrap.innerHTML = "";
  if (ui.adminTableWrap) ui.adminTableWrap.innerHTML = "";
  if (ui.accountsTableWrap) ui.accountsTableWrap.innerHTML = "";
  if (ui.addRowFields) ui.addRowFields.innerHTML = "";

  setAuthMode("login");
  setAdminView("donors", { silent: true });
  clearAuthFields();
  closeEditModal();
}

function showAppShell() {
  if (ui.authScreen) ui.authScreen.classList.add("hidden");
  if (ui.appShell) ui.appShell.classList.remove("hidden");
}

function syncRoleAccess() {
  const isAdmin = isAdminUser();
  state.isAdminUnlocked = isAdmin;

  if (ui.adminTabBtn) {
    ui.adminTabBtn.hidden = !isAdmin;
  }

  if (isAdmin) {
    setAdminView(state.adminView || "donors", { silent: true });
  } else {
    state.adminPassword = "";
    state.adminView = "donors";
    state.accountsData = [];
    if (ui.accountsTableWrap) ui.accountsTableWrap.innerHTML = "";
    setAdminView("donors", { silent: true });
    if (state.activePage === "admin-page") {
      activatePage("dashboard-page", { silent: true });
    }
  }
}

function updateSessionUserPill() {
  if (!ui.sessionUserPill) return;
  if (!state.currentUser) {
    ui.sessionUserPill.textContent = "";
    return;
  }

  if (isAdminUser()) {
    ui.sessionUserPill.textContent = t("sessionAdminLabel", { username: state.currentUser.username });
    return;
  }

  if (state.currentUser.isGuest) {
    ui.sessionUserPill.textContent = t("sessionGuestLabel");
    return;
  }

  ui.sessionUserPill.textContent = t("sessionUserLabel", { username: state.currentUser.username });
}

async function continueAsGuest() {
  state.currentUser = { username: "Guest", role: USER_ROLE, isGuest: true };
  state.adminPassword = "";
  state.adminView = "donors";
  state.searchQuery = "";
  state.accountsData = [];
  if (ui.tableSearchInput) ui.tableSearchInput.value = "";

  syncRoleAccess();
  updateSessionUserPill();
  showAppShell();
  activatePage("dashboard-page", { silent: true });
  await loadData();
}

async function onLoginSubmit(ev) {
  ev.preventDefault();

  const username = (ui.loginUsernameInput && ui.loginUsernameInput.value.trim()) || "";
  const password = (ui.loginPasswordInput && ui.loginPasswordInput.value) || "";
  if (!username || !password) {
    showFlash(t("enterUsernamePassword"), "error");
    return;
  }

  setButtonBusy(ui.loginBtn, true, t("signingIn"));
  try {
    const json = await apiPost("loginUser", { username, password });
    if (json.status !== "success") {
      showFlash(json.message || t("loginFailed"), "error");
      return;
    }

    await finalizeLogin(json.user, password);
  } catch (err) {
    showFlash(t("loginFailed"), "error");
    setConnection("offline");
    console.error("onLoginSubmit error:", err);
  } finally {
    setButtonBusy(ui.loginBtn, false, t("loginBtn"));
  }
}

async function onSignupSubmit(ev) {
  ev.preventDefault();

  const username = (ui.signupUsernameInput && ui.signupUsernameInput.value.trim()) || "";
  const password = (ui.signupPasswordInput && ui.signupPasswordInput.value) || "";
  const confirmPassword = (ui.signupConfirmInput && ui.signupConfirmInput.value) || "";

  if (!username || !password || !confirmPassword) {
    showFlash(t("enterUsernamePassword"), "error");
    return;
  }

  if (password !== confirmPassword) {
    showFlash(t("passwordsMismatch"), "error");
    return;
  }

  setButtonBusy(ui.signupBtn, true, t("creatingAccount"));
  try {
    const json = await apiPost("registerUser", { username, password });
    if (json.status !== "success") {
      showFlash(json.message || t("accountCreateFailed"), "error");
      return;
    }

    setAuthMode("login");
    if (ui.loginUsernameInput) ui.loginUsernameInput.value = username;
    if (ui.loginPasswordInput) ui.loginPasswordInput.value = "";
    if (ui.loginPasswordInput) ui.loginPasswordInput.focus();
    if (ui.signupPasswordInput) ui.signupPasswordInput.value = "";
    if (ui.signupConfirmInput) ui.signupConfirmInput.value = "";

    showFlash(t("accountCreated"), "success");
  } catch (err) {
    showFlash(t("accountCreateFailed"), "error");
    setConnection("offline");
    console.error("onSignupSubmit error:", err);
  } finally {
    setButtonBusy(ui.signupBtn, false, t("signupBtn"));
  }
}

async function finalizeLogin(user, password) {
  const role = user && user.role === ADMIN_ROLE ? ADMIN_ROLE : USER_ROLE;
  const username = (user && user.username) || "";

  state.currentUser = { username, role, isGuest: false };
  state.adminPassword = role === ADMIN_ROLE ? password : "";
  state.adminView = "donors";
  state.searchQuery = "";
  if (ui.tableSearchInput) ui.tableSearchInput.value = "";

  syncRoleAccess();
  updateSessionUserPill();
  showAppShell();
  activatePage(role === ADMIN_ROLE ? "admin-page" : "dashboard-page", { silent: true });

  await loadData();
}

function logoutUser() {
  showAuthScreen();
  showFlash(t("loggedOut"), "info");
}

async function loadData() {
  if (!state.currentUser) {
    return;
  }
  ui.dashboardTableWrap.innerHTML = loadingMarkup(t("loadingDashboard"));
  if (state.isAdminUnlocked) {
    ui.adminTableWrap.innerHTML = loadingMarkup(t("loadingAdmin"));
  }

  setConnection("syncing");
  try {
    const json = await apiGet("getData");
    if (json.status !== "success" || !Array.isArray(json.data)) {
      throw new Error(json.message || "Invalid data payload");
    }

    state.data = json.data;
    state.headers = Array.isArray(json.data[0]) ? json.data[0] : [];
    state.paidColumnIndex = detectPaidColumnIndex(state.headers, json.data.slice(1));

    renderAllTables();
    if (state.isAdminUnlocked) renderAddRowFields();
    if (state.isAdminUnlocked && state.adminView === "accounts") {
      await loadAccounts({ silent: true });
    }

    setConnection("online");
  } catch (err) {
    ui.dashboardTableWrap.innerHTML = errorMarkup(t("unableLoadDashboard"));
    if (state.isAdminUnlocked) {
      ui.adminTableWrap.innerHTML = errorMarkup(t("unableLoadAdmin"));
    }
    setConnection("offline");
    console.error("loadData error:", err);
  }
}

async function loadAccounts(options) {
  if (!state.currentUser || !isAdminUser() || !state.adminPassword) {
    return;
  }

  const silent = options && options.silent;
  if (ui.accountsTableWrap) {
    ui.accountsTableWrap.innerHTML = loadingMarkup(t("loadingAccounts"));
  }
  setButtonBusy(ui.refreshAccountsBtn, true, t("loadingAccounts"));

  try {
    const json = await apiGet("getAccounts", {
      adminUsername: state.currentUser.username,
      adminPassword: state.adminPassword
    });

    if (json.status !== "success" || !Array.isArray(json.data)) {
      throw new Error(json.message || "Invalid accounts payload");
    }

    state.accountsData = json.data;
    renderAccountsTable();
  } catch (err) {
    if (ui.accountsTableWrap) {
      ui.accountsTableWrap.innerHTML = errorMarkup(t("unableLoadAccounts"));
    }
    if (!silent) {
      showFlash(t("unableLoadAccounts"), "error");
    }
    console.error("loadAccounts error:", err);
  } finally {
    setButtonBusy(ui.refreshAccountsBtn, false, t("refreshAccounts"));
  }
}

function renderAllTables() {
  const view = buildFilteredView(state.data, state.searchQuery);
  renderDashboardTable(view);
  renderAdminTable(view);
  updateSearchMeta(view.matchedRows, view.totalRows);
}

function renderDashboardTable(view) {
  renderTable(ui.dashboardTableWrap, view, false);
}

function renderAdminTable(view) {
  if (!state.isAdminUnlocked) {
    ui.adminTableWrap.innerHTML = `<div class="center muted">${escapeHtml(t("unlockAdminToManage"))}</div>`;
    return;
  }

  renderTable(ui.adminTableWrap, view, true);
}

function renderAccountsTable() {
  if (!ui.accountsTableWrap) return;

  const data = Array.isArray(state.accountsData) ? state.accountsData : [];
  if (!data.length || !Array.isArray(data[0])) {
    ui.accountsTableWrap.innerHTML = `<div class="center muted">${escapeHtml(t("noAccountsData"))}</div>`;
    return;
  }

  const headers = data[0];
  const rows = data.slice(1);
  if (!rows.length) {
    ui.accountsTableWrap.innerHTML = `<div class="center muted">${escapeHtml(t("noAccountsData"))}</div>`;
    return;
  }

  let html = "<table><thead><tr>";
  headers.forEach((header) => {
    html += `<th>${escapeHtml(header)}</th>`;
  });
  html += `<th>${escapeHtml(t("accountsActionsHeader"))}</th>`;
  html += "</tr></thead><tbody>";

  rows.forEach((row) => {
    const accountNo = Number(row[0]);
    const isPrimaryAdmin = accountNo === 1;
    const isAdmin = isPrimaryAdmin || isTruthyAdminValue(row[3]);

    html += "<tr>";
    headers.forEach((_, index) => {
      const cellValue = row[index] ?? "";
      if (index === 2) {
        html += `<td class="password-mask">${escapeHtml(maskAccountPassword(cellValue))}</td>`;
        return;
      }
      html += `<td>${escapeHtml(cellValue)}</td>`;
    });

    if (isPrimaryAdmin) {
      html += `<td><span class="pill online">${escapeHtml(t("primaryAdminTag"))}</span></td>`;
    } else {
      const nextAdminState = isAdmin ? "no" : "yes";
      const actionLabel = isAdmin ? t("removeAdminBtn") : t("makeAdminBtn");
      const actionClass = isAdmin ? "delete-btn" : "edit-btn";
      html += `
        <td class="action-cell">
          <button
            class="action-btn admin-toggle-btn ${actionClass}"
            data-account-no="${accountNo}"
            data-next-admin="${nextAdminState}"
            type="button"
          >
            ${escapeHtml(actionLabel)}
          </button>
        </td>
      `;
    }

    html += "</tr>";
  });

  html += "</tbody></table>";
  ui.accountsTableWrap.innerHTML = html;
}

function isTruthyAdminValue(value) {
  const normalized = normalizeSearchValue(value);
  const compact = normalizeCompactValue(value);
  const truthy = new Set(["yes", "true", "1", "y", "admin", "نعم"]);
  return truthy.has(normalized) || truthy.has(compact);
}

function maskAccountPassword(value) {
  const raw = String(value ?? "");
  const length = raw.length > 6 ? raw.length : 6;
  return ".".repeat(length);
}

function onAccountsTableClick(ev) {
  const target = ev.target;
  if (!(target instanceof HTMLElement)) return;

  const button = target.closest(".admin-toggle-btn");
  if (!button) return;

  const accountNo = Number(button.dataset.accountNo);
  const nextAdmin = (button.dataset.nextAdmin || "").toLowerCase() === "yes";
  if (!accountNo || Number.isNaN(accountNo)) return;

  updateAccountAdminStatus(button, accountNo, nextAdmin);
}

async function updateAccountAdminStatus(button, accountNo, setAdmin) {
  if (!isAdminUser() || !state.currentUser || !state.adminPassword) return;

  const originalText = button.textContent || "";
  button.disabled = true;
  button.textContent = t("updatingAdmin");

  try {
    const json = await apiPost("setAccountAdmin", {
      adminUsername: state.currentUser.username,
      adminPassword: state.adminPassword,
      accountNo,
      isAdmin: setAdmin
    });

    if (json.status !== "success") {
      showFlash(json.message || t("adminUpdateFailed"), "error");
      return;
    }

    showFlash(t("adminUpdated"), "success");
    await loadAccounts({ silent: true });
  } catch (err) {
    showFlash(t("adminUpdateFailed"), "error");
    console.error("updateAccountAdminStatus error:", err);
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

function renderTable(target, view, adminMode) {
  if (!view || !Array.isArray(view.headers) || !view.headers.length) {
    target.innerHTML = `<div class="center muted">${escapeHtml(t("noColumns"))}</div>`;
    return;
  }

  if (!Array.isArray(view.rows) || !view.rows.length) {
    const emptyText = state.searchQuery.trim() ? t("noMatch") : t("noData");
    target.innerHTML = `<div class="center muted">${escapeHtml(emptyText)}</div>`;
    return;
  }

  let html = `<table><thead><tr>`;
  view.headers.forEach((header) => {
    html += `<th>${escapeHtml(header)}</th>`;
  });

  if (adminMode) {
    html += `<th>${escapeHtml(t("actionsHeader"))}</th>`;
  }

  html += `</tr></thead><tbody>`;

  view.rows.forEach((entry) => {
    html += `<tr data-row="${entry.rowIndex}">`;
    view.headers.forEach((_, c) => {
      if (c === state.paidColumnIndex) {
        const status = getPaidStatus(entry.row[c]);
        const display = getPaidDisplayValue(status, entry.row[c]);
        const paidClass = status === "yes" ? " paid-yes" : status === "no" ? " paid-no" : "";
        html += `<td class="paid-cell${paidClass}">${escapeHtml(display)}</td>`;
        return;
      }

      html += `<td>${escapeHtml(entry.row[c] ?? "")}</td>`;
    });

    if (adminMode) {
      html += `
        <td class="action-cell">
          <button class="action-btn edit-btn" data-row="${entry.rowIndex}" type="button">${escapeHtml(t("editBtn"))}</button>
          <button class="action-btn delete-btn" data-row="${entry.rowIndex}" type="button">${escapeHtml(t("deleteBtn"))}</button>
        </td>
      `;
    }

    html += `</tr>`;
  });

  html += `</tbody></table>`;
  target.innerHTML = html;

  if (adminMode) {
    target.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", onEditRow);
    });

    target.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", onDeleteRow);
    });
  }
}

function buildFilteredView(data, query) {
  const headers = Array.isArray(data) && Array.isArray(data[0]) ? data[0] : [];
  const allEntries = [];

  if (Array.isArray(data)) {
    for (let r = 1; r < data.length; r++) {
      const row = Array.isArray(data[r]) ? data[r] : [data[r]];
      allEntries.push({ row, rowIndex: r + 1 });
    }
  }

  const totalRows = allEntries.length;
  const trimmedQuery = (query || "").trim();
  if (!trimmedQuery) {
    return { headers, rows: allEntries, matchedRows: totalRows, totalRows };
  }

  const searchableIndexes = getSearchColumnIndexes(headers);
  const normalizedQuery = normalizeSearchValue(trimmedQuery);
  const compactQuery = normalizeCompactValue(trimmedQuery);
  const matchedEntries = allEntries.filter((entry) =>
    rowMatchesQuery(entry.row, searchableIndexes, normalizedQuery, compactQuery)
  );

  return {
    headers,
    rows: matchedEntries,
    matchedRows: matchedEntries.length,
    totalRows
  };
}

function getSearchColumnIndexes(headers) {
  if (!Array.isArray(headers)) {
    return [];
  }

  const priorityPattern = /(name|student|id|اسم|طالب|رقم)/i;
  const indexes = [];

  headers.forEach((header, index) => {
    if (priorityPattern.test(String(header || ""))) {
      indexes.push(index);
    }
  });

  return indexes;
}

function rowMatchesQuery(row, searchableIndexes, normalizedQuery, compactQuery) {
  const sourceValues =
    searchableIndexes.length > 0
      ? searchableIndexes.map((index) => row[index])
      : row;

  const joined = normalizeSearchValue(sourceValues.join(" "));
  const joinedCompact = normalizeCompactValue(sourceValues.join(""));
  if (joined.includes(normalizedQuery) || (compactQuery && joinedCompact.includes(compactQuery))) {
    return true;
  }

  return sourceValues.some((value) => {
    const normalized = normalizeSearchValue(value);
    const compact = normalizeCompactValue(value);
    return normalized.includes(normalizedQuery) || (compactQuery && compact.includes(compactQuery));
  });
}

function normalizeSearchValue(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCompactValue(value) {
  return normalizeSearchValue(value).replace(/[^a-z0-9\u0600-\u06FF]/g, "");
}

function updateSearchMeta(matchedRows, totalRows) {
  if (!ui.searchMeta) return;

  const query = state.searchQuery.trim();
  if (!query) {
    ui.searchMeta.textContent = t("showingAllRows", { total: totalRows });
    return;
  }

  ui.searchMeta.textContent = t("showingFilteredRows", {
    matched: matchedRows,
    total: totalRows,
    query
  });
}

function onSearchChange() {
  state.searchQuery = ui.tableSearchInput.value || "";
  renderAllTables();
}

function clearSearch() {
  state.searchQuery = "";
  ui.tableSearchInput.value = "";
  renderAllTables();
  ui.tableSearchInput.focus();
}

function renderAddRowFields() {
  if (!ui.addRowFields) return;

  const existingValues = collectFieldValues(ui.addRowFields, state.headers.length);
  renderFieldGrid(ui.addRowFields, state.headers, existingValues, { mode: "add" });
}

function renderFieldGrid(container, headers, values, options) {
  if (!container) return;

  if (!Array.isArray(headers) || headers.length === 0) {
    container.innerHTML = `<div class="center muted">${escapeHtml(t("noHeadersYet"))}</div>`;
    return;
  }

  const safeValues = Array.isArray(values) ? values : [];
  const mode = options && options.mode === "edit" ? "edit" : "add";

  let html = "";
  headers.forEach((header, index) => {
    const label = header || `Column ${index + 1}`;
    const value = safeValues[index] ?? "";

    if (isKeepEmptyColumn(index)) {
      const lockedValue = mode === "edit" ? value : "";
      html += `
        <label class="field-card locked-field">
          <span class="field-label">${escapeHtml(label)}</span>
          <input
            class="field-input field-input-locked"
            type="text"
            data-col="${index}"
            value="${escapeHtmlAttr(lockedValue)}"
            placeholder="${escapeHtmlAttr(t("keepEmptyPlaceholder"))}"
            readonly
            aria-readonly="true"
          />
          <span class="field-help">${escapeHtml(t("keepEmptyHint"))}</span>
        </label>
      `;
      return;
    }

    if (index === state.paidColumnIndex) {
      const paidValue = getPaidCanonicalValue(value);
      html += `
        <label class="field-card paid-field">
          <span class="field-label">${escapeHtml(label)}</span>
          <div class="paid-toggle" role="group" aria-label="${escapeHtmlAttr(label)}">
            <button
              type="button"
              class="paid-toggle-btn paid-yes${paidValue === "Yes" ? " active" : ""}"
              data-paid-value="Yes"
            >
              ${escapeHtml(t("statusYes"))}
            </button>
            <button
              type="button"
              class="paid-toggle-btn paid-no${paidValue === "No" ? " active" : ""}"
              data-paid-value="No"
            >
              ${escapeHtml(t("statusNo"))}
            </button>
          </div>
          <input class="paid-value-input" type="hidden" data-col="${index}" value="${escapeHtmlAttr(paidValue)}" />
        </label>
      `;
      return;
    }

    html += `
      <label class="field-card">
        <span class="field-label">${escapeHtml(label)}</span>
        <input
          class="field-input"
          type="text"
          data-col="${index}"
          value="${escapeHtmlAttr(value)}"
        />
      </label>
    `;
  });

  container.innerHTML = html;
  bindPaidToggleControls(container);
}

function bindPaidToggleControls(container) {
  if (!container) return;

  container.querySelectorAll(".paid-field").forEach((field) => {
    const hiddenInput = field.querySelector(".paid-value-input");
    const buttons = Array.from(field.querySelectorAll(".paid-toggle-btn"));
    if (!hiddenInput || buttons.length === 0) return;

    const syncActiveState = () => {
      const currentValue = hiddenInput.value;
      buttons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.paidValue === currentValue);
      });
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        hiddenInput.value = btn.dataset.paidValue || "";
        syncActiveState();
      });
    });

    syncActiveState();
  });
}

function collectFieldValues(container, width) {
  if (!container || !width) return [];

  const values = new Array(width).fill("");
  container.querySelectorAll("[data-col]").forEach((element) => {
    const index = Number(element.dataset.col);
    if (Number.isNaN(index) || index < 0 || index >= width) return;

    let value = element.value;
    if (index === state.paidColumnIndex) {
      value = getPaidCanonicalValue(value);
    }

    values[index] = value;
  });

  return values;
}

function clearAddRowFields() {
  if (!ui.addRowFields) return;

  renderFieldGrid(
    ui.addRowFields,
    state.headers,
    new Array(state.headers.length).fill(""),
    { mode: "add" }
  );
}

async function onAddRow() {
  if (!requireAdminUnlocked()) return;

  const rowData = collectFieldValues(ui.addRowFields, state.headers.length);
  if (!rowData.length) {
    showFlash(t("noColumnsAvailable"), "error");
    return;
  }

  if (rowData.every((value) => String(value).trim() === "")) {
    showFlash(t("fillOneField"), "error");
    return;
  }

  if (state.paidColumnIndex >= 0 && !isPaidSelectionValid(rowData[state.paidColumnIndex])) {
    showFlash(t("selectPaidStatus"), "error");
    return;
  }

  setButtonBusy(ui.addRowBtn, true, t("adding"));
  try {
    const json = await apiPost("add", {
      adminUsername: state.currentUser ? state.currentUser.username : "",
      adminPassword: state.adminPassword,
      rowData
    });

    if (json.status !== "success") {
      showFlash(json.message || t("addFailed"), "error");
      return;
    }

    clearAddRowFields();
    showFlash(t("rowAdded"), "success");
    await loadData();
  } catch (err) {
    showFlash(t("networkAdd"), "error");
    setConnection("offline");
    console.error("onAddRow error:", err);
  } finally {
    setButtonBusy(ui.addRowBtn, false, t("addRowBtn"));
  }
}

async function onDeleteRow(ev) {
  if (!requireAdminUnlocked()) return;

  const rowIndex = Number(ev.currentTarget.dataset.row);
  if (!rowIndex) {
    showFlash(t("invalidRowIndex"), "error");
    return;
  }

  if (!window.confirm(t("confirmDelete", { row: rowIndex }))) return;

  try {
    const json = await apiPost("delete", {
      adminUsername: state.currentUser ? state.currentUser.username : "",
      adminPassword: state.adminPassword,
      rowIndex
    });

    if (json.status !== "success") {
      showFlash(json.message || t("deleteFailed"), "error");
      return;
    }

    showFlash(t("rowDeletedUndo"), "success");
    await loadData();
  } catch (err) {
    showFlash(t("networkDelete"), "error");
    setConnection("offline");
    console.error("onDeleteRow error:", err);
  }
}

function onEditRow(ev) {
  if (!requireAdminUnlocked()) return;

  const rowIndex = Number(ev.currentTarget.dataset.row);
  const current = state.data[rowIndex - 1];
  if (!rowIndex || !current) {
    showFlash(t("rowNotFound"), "error");
    return;
  }

  state.editingRowIndex = rowIndex;
  ui.editRowLabel.textContent = t("editingRow", { row: rowIndex });
  renderFieldGrid(ui.editRowFields, state.headers, current, { mode: "edit" });

  ui.editModal.classList.remove("hidden");
  ui.editModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const firstField =
    ui.editRowFields.querySelector("input[data-col]:not([readonly])") ||
    ui.editRowFields.querySelector(".paid-toggle-btn");
  if (firstField) firstField.focus();
}

function closeEditModal() {
  state.editingRowIndex = null;
  ui.editModal.classList.add("hidden");
  ui.editModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

async function onSaveEdit() {
  if (!requireAdminUnlocked()) return;

  if (!state.editingRowIndex) {
    showFlash(t("noRowSelected"), "error");
    return;
  }

  const rowData = collectFieldValues(ui.editRowFields, state.headers.length);
  if (state.paidColumnIndex >= 0 && !isPaidSelectionValid(rowData[state.paidColumnIndex])) {
    showFlash(t("selectPaidStatus"), "error");
    return;
  }

  setButtonBusy(ui.saveEditBtn, true, t("saving"));
  try {
    const json = await apiPost("edit", {
      adminUsername: state.currentUser ? state.currentUser.username : "",
      adminPassword: state.adminPassword,
      rowIndex: state.editingRowIndex,
      rowData
    });

    if (json.status !== "success") {
      showFlash(json.message || t("editFailed"), "error");
      return;
    }

    closeEditModal();
    showFlash(t("rowUpdated"), "success");
    await loadData();
  } catch (err) {
    showFlash(t("networkEdit"), "error");
    setConnection("offline");
    console.error("onSaveEdit error:", err);
  } finally {
    setButtonBusy(ui.saveEditBtn, false, t("saveChangesBtn"));
  }
}

async function onUndoDelete() {
  if (!requireAdminUnlocked()) return;

  if (!window.confirm(t("confirmUndo"))) return;

  try {
    const json = await apiPost("undoDelete", {
      adminUsername: state.currentUser ? state.currentUser.username : "",
      adminPassword: state.adminPassword
    });

    if (json.status !== "success") {
      showFlash(json.message || t("undoFailed"), "error");
      return;
    }

    showFlash(t("undoSuccess"), "success");
    await loadData();
  } catch (err) {
    showFlash(t("networkUndo"), "error");
    setConnection("offline");
    console.error("onUndoDelete error:", err);
  }
}

function requireAdminUnlocked() {
  if (!state.isAdminUnlocked || !state.adminPassword) {
    showFlash(t("unlockAdminFirst"), "error");
    return false;
  }
  return true;
}

function onLanguageButtonClick(ev) {
  const target = ev.target;
  if (!(target instanceof HTMLElement)) return;

  const button = target.closest(".lang-btn");
  if (!button) return;

  const selected = button.dataset.lang === "ar" ? "ar" : "en";
  if (selected === state.language) {
    return;
  }

  localStorage.setItem(LANGUAGE_STORAGE_KEY, selected);
  applyLanguage(selected);
  renderAllTables();
  if (state.isAdminUnlocked) {
    renderAddRowFields();
    renderAccountsTable();
  }

  if (state.editingRowIndex && !ui.editModal.classList.contains("hidden")) {
    const current = state.data[state.editingRowIndex - 1] || [];
    ui.editRowLabel.textContent = t("editingRow", { row: state.editingRowIndex });
    renderFieldGrid(ui.editRowFields, state.headers, current, { mode: "edit" });
  }

  showFlash(t("settingsSaved"), "success");
}

function syncLanguageButtons() {
  const activeLang = state.language === "ar" ? "ar" : "en";
  [ui.settingsLangEnBtn, ui.settingsLangArBtn].forEach((button) => {
    if (!button) return;
    const isActive = button.dataset.lang === activeLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function applyLanguage(language) {
  state.language = language === "ar" ? "ar" : "en";

  document.documentElement.lang = state.language;
  document.body.classList.toggle("rtl", state.language === "ar");
  document.body.setAttribute("dir", state.language === "ar" ? "rtl" : "ltr");

  if (ui.authEyebrow) ui.authEyebrow.textContent = t("authEyebrow");
  if (ui.authTitle) ui.authTitle.textContent = t("authTitle");
  if (ui.authDesc) ui.authDesc.textContent = t("authDesc");
  if (ui.authModeTabs) ui.authModeTabs.setAttribute("aria-label", t("authModeAria"));
  if (ui.loginTabBtn) ui.loginTabBtn.textContent = t("loginTab");
  if (ui.signupTabBtn) ui.signupTabBtn.textContent = t("signupTab");
  if (ui.loginUsernameLabel) ui.loginUsernameLabel.textContent = t("usernameLabel");
  if (ui.loginPasswordLabel) ui.loginPasswordLabel.textContent = t("passwordLabel");
  if (ui.signupUsernameLabel) ui.signupUsernameLabel.textContent = t("usernameLabel");
  if (ui.signupPasswordLabel) ui.signupPasswordLabel.textContent = t("passwordLabel");
  if (ui.signupConfirmLabel) ui.signupConfirmLabel.textContent = t("confirmPasswordLabel");
  if (ui.loginBtn) ui.loginBtn.textContent = t("loginBtn");
  if (ui.signupBtn) ui.signupBtn.textContent = t("signupBtn");
  if (ui.continueGuestBtn) ui.continueGuestBtn.textContent = t("continueGuestBtn");

  if (ui.pageNav) ui.pageNav.setAttribute("aria-label", t("pagesAria"));
  if (ui.eyebrowText) ui.eyebrowText.textContent = t("eyebrow");
  if (ui.appTitle) ui.appTitle.textContent = t("appTitle");
  if (ui.dashboardTabBtn) ui.dashboardTabBtn.textContent = t("dashboardTab");
  if (ui.adminTabBtn) ui.adminTabBtn.textContent = t("adminTab");
  if (ui.settingsTabBtn) ui.settingsTabBtn.textContent = t("settingsBtn");
  if (ui.adminSubnav) ui.adminSubnav.setAttribute("aria-label", t("adminPagesAria"));
  if (ui.adminDonorsViewBtn) ui.adminDonorsViewBtn.textContent = t("adminDonorsTab");
  if (ui.adminAccountsViewBtn) ui.adminAccountsViewBtn.textContent = t("adminAccountsTab");
  if (ui.logoutBtn) ui.logoutBtn.textContent = t("logoutBtn");

  if (ui.tableSearchLabel) ui.tableSearchLabel.textContent = t("searchLabel");
  if (ui.searchShell) ui.searchShell.setAttribute("aria-label", t("searchAria"));
  if (ui.tableSearchInput) {
    ui.tableSearchInput.placeholder = t("searchPlaceholder");
    ui.tableSearchInput.setAttribute("aria-label", t("searchAria"));
  }
  if (ui.clearSearchBtn) ui.clearSearchBtn.textContent = t("clearBtn");

  if (ui.dashboardTitle) ui.dashboardTitle.textContent = t("dashboardTitle");
  if (ui.adminTitle) ui.adminTitle.textContent = t("adminTitle");
  if (ui.adminDesc) ui.adminDesc.textContent = t("adminDesc");
  if (ui.settingsPageTitle) ui.settingsPageTitle.textContent = t("settingsPageTitle");
  if (ui.settingsPageDesc) ui.settingsPageDesc.textContent = t("settingsPageDesc");
  if (ui.settingsLanguageTitle) ui.settingsLanguageTitle.textContent = t("settingsLanguageTitle");
  if (ui.settingsLanguageDesc) ui.settingsLanguageDesc.textContent = t("settingsLanguageDesc");
  if (ui.settingsEffectsTitle) ui.settingsEffectsTitle.textContent = t("settingsEffectsTitle");
  if (ui.settingsEffectsDesc) ui.settingsEffectsDesc.textContent = t("settingsEffectsDesc");
  if (ui.settingsPreviewTitle) ui.settingsPreviewTitle.textContent = t("settingsPreviewTitle");
  if (ui.settingsPreviewDesc) ui.settingsPreviewDesc.textContent = t("settingsPreviewDesc");
  if (ui.adminBadge) ui.adminBadge.textContent = t("adminMode");
  if (ui.quickActionsLabel) ui.quickActionsLabel.textContent = t("quickActions");
  if (ui.refreshBtn) ui.refreshBtn.textContent = t("refreshData");
  if (ui.undoBtn) ui.undoBtn.textContent = t("undoDelete");
  if (ui.refreshAccountsBtn) ui.refreshAccountsBtn.textContent = t("refreshAccounts");
  if (ui.accountsTitle) ui.accountsTitle.textContent = t("accountsTitle");
  if (ui.accountsDesc) ui.accountsDesc.textContent = t("accountsDesc");

  if (ui.addRowTitle) ui.addRowTitle.textContent = t("addRowTitle");
  if (ui.addRowDesc) ui.addRowDesc.textContent = t("addRowDesc");
  if (ui.clearAddRowBtn) ui.clearAddRowBtn.textContent = t("clearBtn");
  if (ui.addRowBtn) ui.addRowBtn.textContent = t("addRowBtn");

  if (ui.editModalTitle) ui.editModalTitle.textContent = t("editRowTitle");
  if (ui.closeEditModalBtn) ui.closeEditModalBtn.textContent = t("closeBtn");
  if (ui.saveEditBtn) ui.saveEditBtn.textContent = t("saveChangesBtn");

  if (ui.settingsLanguageButtons) {
    ui.settingsLanguageButtons.setAttribute("aria-label", t("languageOptionsAria"));
  }
  if (ui.settingsNote) ui.settingsNote.textContent = t("settingsNote");
  if (ui.settingsLangEnBtn) ui.settingsLangEnBtn.textContent = t("langEnglish");
  if (ui.settingsLangArBtn) ui.settingsLangArBtn.textContent = t("langArabic");
  if (ui.previewGhostBtn) ui.previewGhostBtn.textContent = t("previewGhostBtn");
  if (ui.previewPrimaryBtn) ui.previewPrimaryBtn.textContent = t("previewPrimaryBtn");
  if (ui.previewTile) ui.previewTile.textContent = t("previewTile");
  syncLanguageButtons();

  if (state.editingRowIndex) {
    ui.editRowLabel.textContent = t("editingRow", { row: state.editingRowIndex });
  }

  updateSessionUserPill();
  updateSearchMeta(0, Array.isArray(state.data) ? Math.max(state.data.length - 1, 0) : 0);
  setConnection(state.connectionStatus);
}

function detectPaidColumnIndex(headers, dataRows) {
  if (!Array.isArray(headers) || headers.length === 0) return -1;

  const headerPattern = /(paid|payment|paid\s*status|is\s*paid|مدفوع|دفع)/i;
  const headerMatch = headers.findIndex((header) => headerPattern.test(String(header || "")));
  if (headerMatch >= 0) return headerMatch;

  let bestIndex = -1;
  let bestScore = 0;

  headers.forEach((_, index) => {
    let known = 0;
    let nonEmpty = 0;

    dataRows.forEach((row) => {
      const value = Array.isArray(row) ? row[index] : "";
      if (String(value ?? "").trim() !== "") nonEmpty += 1;
      if (getPaidStatus(value)) known += 1;
    });

    if (nonEmpty === 0) return;

    const score = known / nonEmpty;
    if (known >= 1 && score >= 0.2 && score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function getPaidStatus(value) {
  const normalized = normalizeSearchValue(value);
  const compact = normalizeCompactValue(value);

  const yesSet = new Set(["yes", "paid", "true", "1", "y", "نعم", "مدفوع"]);
  const noSet = new Set(["no", "unpaid", "false", "0", "n", "لا", "غيرمدفوع", "notpaid"]);

  if (yesSet.has(normalized) || yesSet.has(compact)) return "yes";
  if (noSet.has(normalized) || noSet.has(compact)) return "no";
  return null;
}

function getPaidCanonicalValue(value) {
  const status = getPaidStatus(value);
  if (status === "yes") return "Yes";
  if (status === "no") return "No";
  return "";
}

function getPaidDisplayValue(status, rawValue) {
  if (status === "yes") return t("statusYes");
  if (status === "no") return t("statusNo");
  return rawValue ?? "";
}

function isPaidSelectionValid(value) {
  return value === "Yes" || value === "No";
}

function isKeepEmptyColumn(index) {
  return KEEP_EMPTY_COLUMN_INDEXES.includes(index);
}

function getInitialLanguage() {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === "ar" ? "ar" : "en";
}

function t(key, vars) {
  const table = TRANSLATIONS[state.language] || TRANSLATIONS.en;
  const fallback = TRANSLATIONS.en[key] || key;
  let template = table[key] || fallback;

  if (!vars) return template;

  Object.keys(vars).forEach((name) => {
    template = template.replaceAll(`{${name}}`, String(vars[name]));
  });

  return template;
}

function buildApiUrl(action, payload) {
  const url = new URL(WEB_APP_URL, window.location.href);
  url.searchParams.set("action", action);
  if (payload !== undefined) {
    url.searchParams.set("payload", JSON.stringify(payload));
  }
  return url.toString();
}

async function apiGet(action, payload) {
  const response = await fetch(buildApiUrl(action, payload));
  return parseApiResponse(response);
}

async function apiPost(action, payload) {
  const body = new URLSearchParams();
  body.set("action", action);
  body.set("payload", JSON.stringify(payload || {}));

  try {
    const response = await fetch(buildApiUrl(action), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: body.toString()
    });

    const json = await parseApiResponse(response);
    if (json && json.status === "error" && /Unknown POST action/i.test(String(json.message || ""))) {
      return await apiGet(action, payload || {});
    }
    return json;
  } catch (postErr) {
    try {
      return await apiGet(action, payload || {});
    } catch (getErr) {
      throw new Error(
        `POST failed (${postErr.message}) and GET fallback failed (${getErr.message})`
      );
    }
  }
}

async function parseApiResponse(response) {
  const text = await response.text();
  let json;

  try {
    json = JSON.parse(text);
  } catch (err) {
    const preview = text ? text.slice(0, 180).replace(/\s+/g, " ") : "empty response";
    throw new Error(`Invalid response from server (${response.status}): ${preview}`);
  }

  if (!response.ok) {
    throw new Error(json.message || `HTTP ${response.status}`);
  }

  return json;
}

function setButtonBusy(button, busy, label) {
  if (!button) return;
  button.disabled = busy;
  button.textContent = label;
}

function setConnection(status) {
  state.connectionStatus = status;
  if (!ui.connectionPill) return;

  ui.connectionPill.classList.remove("online", "offline", "syncing");

  if (status === "online") {
    ui.connectionPill.textContent = t("connected");
    ui.connectionPill.classList.add("online");
    return;
  }

  if (status === "offline") {
    ui.connectionPill.textContent = t("connectionIssue");
    ui.connectionPill.classList.add("offline");
    return;
  }

  ui.connectionPill.textContent = t("syncing");
  ui.connectionPill.classList.add("syncing");
}

function showFlash(message, type) {
  if (!ui.flash) {
    window.alert(message);
    return;
  }

  ui.flash.classList.remove("hidden", "success", "error", "info");
  ui.flash.classList.add(type || "info");
  ui.flash.textContent = message;

  window.clearTimeout(showFlash.timeoutId);
  showFlash.timeoutId = window.setTimeout(() => {
    ui.flash.classList.add("hidden");
  }, 2800);
}

function loadingMarkup(text) {
  return `<div class="center muted">${escapeHtml(text)}</div>`;
}

function errorMarkup(text) {
  return `<div class="center danger">${escapeHtml(text)}</div>`;
}

function escapeHtml(value) {
  if (value === null || value === undefined) return "";

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeHtmlAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}
