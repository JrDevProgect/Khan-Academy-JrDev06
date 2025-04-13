const ver = "1.0.0";
let isDev = false;
const repoPath = `https://raw.githubusercontent.com/JrDevProgect/Khan-Academy-JrDev06/refs/heads/main/`;
let device = { mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile|Tablet|Kindle|Silk|PlayBook|BB10/i.test(navigator.userAgent), apple: /iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(navigator.userAgent) };
let user = { username: "Username", nickname: "Nickname", UID: 0 }
let loadedPlugins = [];
const unloader = document.createElement('unloader');
const dropdownMenu = document.createElement('dropDownMenu');
const watermark = document.createElement('watermark');
const statsPanel = document.createElement('statsPanel');
const splashScreen = document.createElement('splashScreen');
window.features = { questionSpoof: true, videoSpoof: true, showAnswers: false, autoAnswer: false, customBanner: false, nextRecomendation: false, repeatQuestion: false, minuteFarmer: false, rgbLogo: false };
window.featureConfigs = { autoAnswerDelay: 3, customUsername: "", customPfp: "" };
document.addEventListener('contextmenu', (e) => !window.disableSecurity && e.preventDefault());
document.addEventListener('keydown', (e) => { if (!window.disableSecurity && (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)))) { e.preventDefault(); } });
document.head.appendChild(Object.assign(document.createElement("style"),{innerHTML:"@font-face{font-family:'MuseoSans';src:url('https://corsproxy.io/?url=https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ynddewua.ttf')format('truetype')}"}));
document.head.appendChild(Object.assign(document.createElement('style'),{innerHTML:"::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #f1f1f1; } ::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: #555; }"}));
document.querySelector("link[rel~='icon']").href = 'https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ukh0rq22.png';
class EventEmitter{constructor(){this.events={}}on(t,e){"string"==typeof t&&(t=[t]),t.forEach(t=>{this.events[t]||(this.events[t]=[]),this.events[t].push(e)})}off(t,e){"string"==typeof t&&(t=[t]),t.forEach(t=>{this.events[t]&&(this.events[t]=this.events[t].filter(t=>t!==e))})}emit(t,...e){this.events[t]&&this.events[t].forEach(t=>{t(...e)})}once(t,e){"string"==typeof t&&(t=[t]);let s=(...i)=>{e(...i),this.off(t,s)};this.on(t,s)}};
const plppdo = new EventEmitter();
new MutationObserver((mutationsList) => { for (let mutation of mutationsList) if (mutation.type === 'childList') plppdo.emit('domChanged'); }).observe(document.body, { childList: true, subtree: true });
window.debug = function(text) {}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const playAudio = url => { const audio = new Audio(url); audio.play(); };
const findAndClickByClass = className => { const element = document.querySelector(`.${className}`); if (element) { element.click(); sendToast(`⭕ Pressing ${className}...`, 1000); } }
function sendToast(text, duration=5000, gravity='bottom') { Toastify({ text: text, duration: duration, gravity: gravity, position: "center", stopOnFocus: true, style: { background: "#000000" } }).showToast(); };
async function showSplashScreen() { splashScreen.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;display:flex;align-items:center;justify-content:center;z-index:9999;opacity:0;transition:opacity 0.5s ease;user-select:none;color:white;font-family:MuseoSans,sans-serif;font-size:30px;text-align:center;"; splashScreen.innerHTML = '<span style="color:white;">EDUHACK</span><span style="color:#72ff72;">.SPACE</span><br><span style="font-size:20px;color:#888;">Made by JrDev06</span>'; document.body.appendChild(splashScreen); setTimeout(() => splashScreen.style.opacity = '1', 10);};
async function hideSplashScreen() { splashScreen.style.opacity = '0'; setTimeout(() => splashScreen.remove(), 1000); };
function devTab() {
    plppdo.on('domChanged', () => {
        if (document.getElementById('eduHackTab')) return;
        function createTab(name, href = '#') { 
            const li = document.createElement('li'); 
            li.innerHTML = `<a class="_8ry3zep" href="${href}" target="_blank"><span class="_xy39ea8">${name}</span></a>`; 
            return li; 
        }
        const nav = document.querySelector('nav[data-testid="side-nav"]'); 
        if (!nav) return;
        const section = document.createElement('section');
        section.id = 'eduHackTab';
        section.className = '_1ozlbq6';
        section.innerHTML = '<h2 class="_18undph9">EduHack</h2>';
        const ul = document.createElement('ul');
        const devTab = createTab('Developer', '#');
        devTab.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            window.eduHackWin = window.open("", "_blank");
            if (window.eduHackWin) {
                window.eduHackWin.document.write(`
                    <html>
                    <head>
                        <title>EduHack Developer</title>
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                display: flex; 
                                justify-content: center; 
                                align-items: center; 
                                height: 100vh; 
                                background: #121212; 
                                color: #fff; 
                                margin: 0; 
                            }
                            .container { 
                                width: min(90vw, 600px);
                                height: min(90vh, 600px);
                                padding: 20px; 
                                border-radius: 10px; 
                                background: #1e1e1e; 
                                box-shadow: 0px 0px 15px rgba(0,0,0,0.5); 
                                display: flex; 
                                flex-direction: column; 
                                justify-content: space-between;
                            }
                            h2 {
                                text-align: center;
                                margin-bottom: 10px;
                            }
                            .credit {
                                text-align: center;
                                font-size: 14px;
                                color: #888;
                                margin-top: 5px;
                            }
                            .toggle-container {
                                flex: 1;
                                overflow-y: auto;
                                padding-right: 10px;
                            }
                            .toggle { 
                                display: flex; 
                                justify-content: space-between; 
                                align-items: center; 
                                padding: 10px; 
                                border-bottom: 1px solid #333; 
                            }
                            .toggle strong { color: #fff; }
                            .toggle small { color: #bbb; }
                            .debug-box { 
                                width: 90%;
                                height: 150px; 
                                overflow-y: auto; 
                                background: #000; 
                                color: #ccc; 
                                padding: 10px; 
                                font-family: monospace; 
                                white-space: pre-wrap; 
                                border-radius: 5px; 
                                border: 1px solid #333;
                                margin: 10px auto;
                            }
                            input[type="checkbox"] { 
                                transform: scale(1.2); 
                                cursor: pointer; 
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2>Developer Options</h2>
                            <div class="credit">Made by JrDev06</div>
                            <div class="toggle-container" id="toggles"></div>
                            <div class="debug-box" id="debugBox"></div>
                        </div>
                        <script>
                            document.head.appendChild(Object.assign(document.createElement('style'), {
                                innerHTML: "::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #1e1e1e; } ::-webkit-scrollbar-thumb { background: #444; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: #666; }"
                            }));
                        </script>
                    </body>
                    </html>
                `);
            }
            createToggle('Debug Mode', 'Enables debugging logs', 'debugMode', window.debugMode || false);
            createToggle('Disable Security', 'Enables right-click and Ctrl+Shift+I again', 'disableSecurity', window.disableSecurity || false);
            createToggle('Disable Ping Request', 'Disables the request triggered every 1 second to find out the ping in ms', 'disablePing', window.disablePing || false);
        });
        ul.appendChild(devTab);
        section.appendChild(ul);
        nav.appendChild(section);
    });
    window.createToggle = function(name, desc, varName, toggled = false) {
        if (!window.eduHackWin || window.eduHackWin.closed) return;
        const toggleContainer = window.eduHackWin.document.getElementById('toggles');
        if (!toggleContainer) return;
        const toggleId = `toggle-${varName}`;
        const toggleElement = document.createElement('div');
        toggleElement.className = 'toggle';
        toggleElement.innerHTML = `
            <div>
                <strong>${name}</strong><br>
                <small>${desc}</small>
            </div>
            <input type="checkbox" id="${toggleId}" ${toggled ? "checked" : ""}>
        `;
        toggleElement.querySelector('input').addEventListener('change', (e) => {
            window[varName] = e.target.checked;
            debug(`❕${name} set to ${window[varName]}`);
        });
        toggleContainer.appendChild(toggleElement);
    };
    window.debug = function(message) {
        if (!window.eduHackWin || window.eduHackWin.closed || !window.debugMode) return;
        const debugBox = window.eduHackWin.document.getElementById('debugBox');
        if (debugBox) {
            debugBox.innerHTML += message + '\n';
            debugBox.scrollTop = debugBox.scrollHeight;
        }
    };
    window.onerror = function(message, source, lineno, colno, error) { debug(`🚨 Error @ ${source}:${lineno},${colno} \n${error ? error.stack : message}`); return true; };
}
function mainMenu() {
    const setFeatureByPath = (path, value) => { let obj = window; const parts = path.split('.'); while (parts.length > 1) obj = obj[parts.shift()]; obj[parts[0]] = value; }
    function addFeature(features) {
        features.forEach(elements => {
            const feature = document.createElement('feature');
            elements.forEach(attribute => {
                let element = attribute.type === 'nonInput' ? document.createElement('label') : document.createElement('input');
                if (attribute.type === 'nonInput') element.innerHTML = attribute.name;
                else { element.type = attribute.type; element.id = attribute.name; }
                if (attribute.attributes) {
                    attribute.attributes.split(' ').map(attr => attr.split('=')).forEach(([key, value]) => {
                        value = value ? value.replace(/"/g, '') : '';
                        key === 'style' ? element.style.cssText = value : element.setAttribute(key, value);
                    });
                }
                if (attribute.variable) element.setAttribute('setting-data', attribute.variable);
                if (attribute.dependent) element.setAttribute('dependent', attribute.dependent);
                if (attribute.className) element.classList.add(attribute.className);
                if (attribute.labeled) {
                    const label = document.createElement('label');
                    if (attribute.className) label.classList.add(attribute.className);
                    if (attribute.attributes) {
                        attribute.attributes.split(' ').map(attr => attr.split('=')).forEach(([key, value]) => {
                            value = value ? value.replace(/"/g, '') : '';
                            key === 'style' ? label.style.cssText = value : label.setAttribute(key, value);
                        });
                    }
                    label.innerHTML = `${element.outerHTML} ${attribute.label}`;
                    feature.appendChild(label);
                } else {
                    feature.appendChild(element);
                }
            });
            dropdownMenu.innerHTML += feature.outerHTML;
        });
    }
    function handleInput(ids, callback = null) {
        (Array.isArray(ids) ? ids.map(id => document.getElementById(id)) : [document.getElementById(ids)])
        .forEach(element => {
            if (!element) return;
            const setting = element.getAttribute('setting-data'),
                dependent = element.getAttribute('dependent'),
                handleEvent = (e, value) => {
                    setFeatureByPath(setting, value);
                    if (callback) callback(value, e);
                };
            if (element.type === 'checkbox') {
                element.addEventListener('change', (e) => {
                    playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/5os0bypi.wav');
                    handleEvent(e, e.target.checked);
                    if (dependent) dependent.split(',').forEach(dep => 
                        document.querySelectorAll(`.${dep}`).forEach(depEl => 
                            depEl.style.display = e.target.checked ? null : "none"));
                });
            } else {
                element.addEventListener('input', (e) => handleEvent(e, e.target.value));
            }
        });
    }
    Object.assign(watermark.style, {
        position: 'fixed', top: '0', left: '85%', width: '150px', height: '30px', backgroundColor: 'RGB(0,0,0,0.5)',
        color: 'white', fontSize: '15px', fontFamily: 'MuseoSans, sans-serif', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        cursor: 'default', userSelect: 'none', padding: '0 10px',  borderRadius: '10px', zIndex: '1001', transition: 'transform 0.3s ease'
    });
    if (device.mobile) watermark.style.left = '55%'
    watermark.innerHTML = `<span style="text-shadow: -1px 0.5px 0 #72ff72, -2px 0px 0 #2f672e;">EH</span> <span style="color:gray; padding-left:2px; font-family: Arial, sans-serif; font-size:10px">${ver} | JrDev06</span>`;
    document.body.appendChild(watermark);
    let isDragging = false, offsetX, offsetY;
    watermark.addEventListener('mousedown', e => { if (!dropdownMenu.contains(e.target)) { isDragging = true; offsetX = e.clientX - watermark.offsetLeft; offsetY = e.clientY - watermark.offsetTop; watermark.style.transform = 'scale(0.9)'; unloader.style.transform = 'scale(1)'; } });
    watermark.addEventListener('mouseup', () => { isDragging = false; watermark.style.transform = 'scale(1)'; unloader.style.transform = 'scale(0)'; if (checkCollision(watermark.getBoundingClientRect(), unloader.getBoundingClientRect())) unload(); });
    document.addEventListener('mousemove', e => { if (isDragging) { let newX = Math.max(0, Math.min(e.clientX - offsetX, window.innerWidth - watermark.offsetWidth)); let newY = Math.max(0, Math.min(e.clientY - offsetY, window.innerHeight - watermark.offsetHeight)); Object.assign(watermark.style, { left: `${newX}px`, top: `${newY}px` }); dropdownMenu.style.display = 'none'; } });
    Object.assign(dropdownMenu.style, {
        position: 'absolute', top: '100%', left: '0', width: '160px', backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '10px', color: 'white', fontSize: '13px', fontFamily: 'Monospace, sans-serif',
        display: 'none', flexDirection: 'column', zIndex: '1000', padding: '5px', cursor: 'default',
        userSelect: 'none', transition: 'transform 0.3s ease', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)'
    });
    dropdownMenu.innerHTML = `
        <style>
            input[type="checkbox"] {appearance: none; width: 15px; height: 15px; background-color: #3a3a3b;
            border: 1px solid #acacac; border-radius: 3px; margin-right: 5px; cursor: pointer;}
            input[type="checkbox"]:checked {background-color: #540b8a; border-color: #720fb8;}
            input[type="text"], input[type="number"], input[type="range"] {width: calc(100% - 10px); border: 1px solid #343434; 
            color: white; accent-color: #540b8a; background-color: #540b8a; padding: 3px; border-radius: 3px; background: none;}
            label {display: flex; align-items: center; color: #3a3a3b; padding-top: 3px;}
        </style>
    `;
    watermark.appendChild(dropdownMenu);
    let featuresList = [
        [{ name: 'questionSpoof', type: 'checkbox', variable: 'features.questionSpoof', attributes: 'checked', labeled: true, label: 'Question Spoof' },
        { name: 'videoSpoof', type: 'checkbox', variable: 'features.videoSpoof', attributes: 'checked', labeled: true, label: 'Video Spoof' },
        { name: 'showAnswers', type: 'checkbox', variable: 'features.showAnswers', labeled: true, label: 'Answer Revealer' }],
        [{ name: 'autoAnswer', type: 'checkbox', variable: 'features.autoAnswer', dependent: 'autoAnswerDelay,nextRecomendation,repeatQuestion', labeled: true, label: 'Auto Answer' },
        { name: 'repeatQuestion', className: 'repeatQuestion', type: 'checkbox', variable: 'features.repeatQuestion', attributes: 'style="display:none;"', labeled: true, label: 'Repeat Question' },
        { name: 'nextRecomendation', className: 'nextRecomendation', type: 'checkbox', variable: 'features.nextRecomendation', attributes: 'style="display:none;"', labeled: true, label: 'Recomendations' },
        { name: 'autoAnswerDelay', className: 'autoAnswerDelay', type: 'range', variable: 'features.autoAnswerDelay', attributes: 'style="display:none;" min="1" max="3" value="1"', labeled: false }],
        [{ name: 'minuteFarm', type: 'checkbox', variable: 'features.minuteFarmer', labeled: true, label: 'Minute Farmer' },
        { name: 'customBanner', type: 'checkbox', variable: 'features.customBanner', labeled: true, label: 'Custom Banner' },
        { name: 'rgbLogo', type: 'checkbox', variable: 'features.rgbLogo', labeled: true, label: 'RGB Logo' }],
        [{ name: 'darkMode', type: 'checkbox', variable: 'features.darkMode', attributes: 'checked', labeled: true, label: 'Dark Mode' },
        { name: 'onekoJs', type: 'checkbox', variable: 'features.onekoJs', labeled: true, label: 'onekoJs' }]
    ]
    if (!device.apple) {
        featuresList.push(
            [{ name: 'Custom Username', type: 'nonInput' }, { name: 'customName', type: 'text', variable: 'featureConfigs.customUsername', attributes: 'autocomplete="off"' }],
            [{ name: 'Custom pfp', type: 'nonInput' }, { name: 'customPfp', type: 'text', variable: 'featureConfigs.customPfp', attributes: 'autocomplete="off"' }]
        );
    }
    featuresList.push([{ name: `${user.username} - UID: ${user.UID}`, type: 'nonInput', attributes: 'style="font-size:10px;"padding-left:5px;' }]);
    addFeature(featuresList);
    handleInput(['questionSpoof', 'videoSpoof', 'showAnswers', 'nextRecomendation', 'repeatQuestion', 'minuteFarm', 'customBanner', 'rgbLogo']);
    if (!device.apple) handleInput(['customName', 'customPfp'])
    handleInput('autoAnswer', checked => checked && !features.questionSpoof && (document.querySelector('[setting-data="features.questionSpoof"]').checked = features.questionSpoof = true));
    handleInput('autoAnswerDelay', value => value && (featureConfigs.autoAnswerDelay = 4 - value));
    handleInput('darkMode', checked => checked ? (DarkReader.setFetchMethod(window.fetch), DarkReader.enable()) : DarkReader.disable());
    handleInput('onekoJs', checked => { onekoEl = document.getElementById('oneko'); if (onekoEl) {onekoEl.style.display = checked ? null : "none"} });
    watermark.addEventListener('mouseenter', () => { dropdownMenu.style.display = 'flex'; playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/3kd01iyj.wav'); } );
    watermark.addEventListener('mouseleave', e => { !watermark.contains(e.relatedTarget) && (dropdownMenu.style.display = 'none'); playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/rqizlm03.wav'); });
}
function statusPanel() {
    Object.assign(statsPanel.style, {
        position: 'fixed', top: '95%', left: '20px', width: '250px', height: '30px',
        backgroundColor: 'rgb(0,0,0,0.2)', color: 'white', fontSize: '13px', fontFamily: 'Arial, sans-serif',
        display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'default', borderRadius: '10px',
        userSelect: 'none', zIndex: '1000', transition: 'transform 0.3s', backdropFilter: 'blur(1.5px)', WebkitBackdropFilter: 'blur(1.5px)'
    });
    const getPing = async () => { if(window.disablePing) return ':( '; try { const t = performance.now(); await fetch('https://pt.khanacademy.org/', { method: 'HEAD' }); return Math.round(performance.now() - t); } catch { return 'Error'; } };
    let lastFrameTime = performance.now(), frameCount = 0, fps = 0;
    (function calcFPS() { if (++frameCount && performance.now() - lastFrameTime >= 1000) { fps = Math.round(frameCount * 1000 / (performance.now() - lastFrameTime)); frameCount = 0; lastFrameTime = performance.now(); } requestAnimationFrame(calcFPS); })();
    const getTime = () => new Date().toLocaleTimeString();
    const update = async () => statsPanel.innerHTML = `
        <span style="text-shadow: -1px 0.5px 0 #72ff72, -2px 0px 0 #2f672e;">EH</span>
        <span style="margin: 0 8px;">|</span><span>${fps}fps</span>
        <span style="margin: 0 8px;">|</span><span>${await getPing()}ms</span>
        <span style="margin: 0 8px;">|</span><span>${getTime()}</span>
        <span style="margin: 0 8px;">|</span><span>JrDev06</span>
    `;
    update(); document.body.appendChild(statsPanel); setInterval(update, 1000);
    let isDragging = false, offsetX, offsetY;
    statsPanel.onmousedown = e => { isDragging = true; offsetX = e.clientX - statsPanel.offsetLeft; offsetY = e.clientY - statsPanel.offsetTop; statsPanel.style.transform = 'scale(0.9)'; };
    statsPanel.onmouseup = () => { isDragging = false; statsPanel.style.transform = 'scale(1)'; };
    document.onmousemove = e => { if (isDragging) { Object.assign(statsPanel.style, { left: `${Math.max(0, Math.min(e.clientX - offsetX, window.innerWidth - statsPanel.offsetWidth))}px`, top: `${Math.max(0, Math.min(e.clientY - offsetY, window.innerHeight - statsPanel.offsetHeight))}px` }); }};
    if(device.mobile) plppdo.on('domChanged', () => window.location.href.includes("khanacademy.org/profile") ? statsPanel.style.display = 'flex' : statsPanel.style.display = 'none' );
}
function widgetBot() {
    if (!device.mobile) {
        const script = Object.assign(document.createElement('script'), {
            src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3',
            async: true,
            onload: () => {
                const discEmbed = new Crate({
                    server: '1286573512831533056',
                    channel: '1286573601687867433',
                    location: ['bottom', 'right'],
                    notifications: true,
                    indicator: true,
                    allChannelNotifications: true,
                    defer: false,
                    color: '#000000'
                });
                plppdo.on('domChanged', () => window.location.href.includes("khanacademy.org/profile") ? discEmbed.show() : discEmbed.hide());
            }
        });
        document.body.appendChild(script);
    }
}
function autoAnswer() {
    const baseClasses = ["_19uopuu", "_ssxvf9l", "_1r8cd7xe", "_1yok8f4"];
    eduHackDominates = true;
    (async () => { 
        while (eduHackDominates) {
            if (features.autoAnswer && features.questionSpoof) {
                const classToCheck = [...baseClasses];
                if (features.nextRecomendation) device.mobile ? classToCheck.push("_ixuggsz") : classToCheck.push("_1kkrg8oi");
                if (features.repeatQuestion) classToCheck.push("_ypgawqo");
                for (const q of classToCheck) {
                    findAndClickByClass(q);
                    await delay(500);
                    const checkButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase() === "check");
                    if (checkButton) {
                        checkButton.click();
                        sendToast("✅ Check button clicked!", 1000);
                    }
                    await delay(500);
                    const element = document.getElementsByClassName(q)[0];
                    if (element && element.textContent === "Show summary") {
                        sendToast("🎉 Exercise completed!", 3000);
                        playAudio("https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/4x5g14gj.wav");
                    }
                }
            }
            await delay(featureConfigs.autoAnswerDelay * 750);
        }
    })();
}
function minuteFarm() {
    const originalFetch = window.fetch;
    window.fetch = async function (input, init = {}) {
        let body;
        if (input instanceof Request) body = await input.clone().text();
        else if (init.body) body = init.body;
        if (features.minuteFarmer && body && input.url.includes("mark_conversions")) {
            try {
                if (body.includes("termination_event")) { sendToast("🚫 Time limiter blocked.", 1000); return; }
            } catch (e) { debug(`🚨 Error @ minuteFarm.js\n${e}`); }
        }
        return originalFetch.apply(this, arguments);
    };
}
function questionSpoof() {
    const phrases = [ 
        "🔥 Get good, get [EduHack](https://github.com/JrDevProgect/Khan-Academy-JrDev06/)!",
        "🤍 Made by JrDev06.",
        "☄️ By [JrDevProgect/Khan-Academy-JrDev06](https://github.com/JrDevProgect/Khan-Academy-JrDev06/).",
        "🌟 Star the project on [GitHub](https://github.com/JrDevProgect/Khan-Academy-JrDev06/)!",
        "🦢 Nix made it awesome ;)",
    ];
    const originalFetch = window.fetch;
    window.fetch = async function (input, init) {
        let body;
        if (input instanceof Request) body = await input.clone().text();
        else if (init && init.body) body = init.body;
        const originalResponse = await originalFetch.apply(this, arguments);
        const clonedResponse = originalResponse.clone();
        try {
            const responseBody = await clonedResponse.text();
            let responseObj = JSON.parse(responseBody);
            if (features.questionSpoof && responseObj?.data?.assessmentItem?.item?.itemData) {
                let itemData = JSON.parse(responseObj.data.assessmentItem.item.itemData);
                if (itemData.question.content[0] === itemData.question.content[0].toUpperCase()) {
                    itemData.answerArea = { "calculator": false, "chi2Table": false, "periodicTable": false, "tTable": false, "zTable": false };
                    itemData.question.content = phrases[Math.floor(Math.random() * phrases.length)] + `[[☃ radio 1]]`;
                    itemData.question.widgets = { "radio 1": { options: { choices: [ { content: "Correct answer.", correct: true }, { content: "Incorrect answer.", correct: false } ] } } };
                    responseObj.data.assessmentItem.item.itemData = JSON.stringify(itemData);
                    sendToast("🔓 Question exploited.", 1000);
                    return new Response(JSON.stringify(responseObj), { status: originalResponse.status, statusText: originalResponse.statusText, headers: originalResponse.headers });
                }
            }
        } catch (e) { debug(`🚨 Error @ questionSpoof.js\n${e}`); }
        return originalResponse;
    };
}
function videoSpoof() {
    const originalFetch = window.fetch;
    window.fetch = async function (input, init) {
        let body;
        if (input instanceof Request) body = await input.clone().text();
        else if (init && init.body) body = init.body;
        if (features.videoSpoof && body && body.includes('"operationName":"updateUserVideoProgress"')) {
            try {
                let bodyObj = JSON.parse(body);
                if (bodyObj.variables && bodyObj.variables.input) {
                    const durationSeconds = bodyObj.variables.input.durationSeconds;
                    bodyObj.variables.input.secondsWatched = durationSeconds;
                    bodyObj.variables.input.lastSecondWatched = durationSeconds;
                    body = JSON.stringify(bodyObj);
                    if (input instanceof Request) { input = new Request(input, { body: body }); } 
                    else init.body = body; 
                    sendToast("🔓 Video exploited.", 1000);
                }
            } catch (e) { debug(`🚨 Error @ videoSpoof.js\n${e}`); }
        }
        return originalFetch.apply(this, arguments);
    };
}
function spoofUser() {
    plppdo.on('domChanged', () => {
        if (!device.apple) {
            const pfpElement = document.querySelector('.avatar-pic');
            const nicknameElement = document.querySelector('.user-deets.editable h2');
            if (nicknameElement) nicknameElement.textContent = featureConfigs.customUsername || user.nickname; 
            if (featureConfigs.customPfp && pfpElement) { 
                Object.assign(pfpElement, { src: featureConfigs.customPfp, alt: "Not an image URL" });
                pfpElement.style.borderRadius = "50%";
            }
        }
    });
}
if (!/^https?:\/\/([a-z0-9-]+\.)?khanacademy\.org/.test(window.location.href)) { alert("❌ EduHack Failed to Inject!\n\nYou need to run EduHack on the Khan Academy website! (https://pt.khanacademy.org/)"); window.location.href = "https://pt.khanacademy.org/"; }
showSplashScreen();
loadScript('https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.js', 'onekoJs').then(() => { onekoEl = document.getElementById('oneko'); onekoEl.style.backgroundImage = "url('https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif')"; onekoEl.style.display = "none"; });
loadScript('https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js', 'darkReaderPlugin').then(()=>{ DarkReader.setFetchMethod(window.fetch); DarkReader.enable(); })
loadCss('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css', 'toastifyCss');
loadScript('https://cdn.jsdelivr.net/npm/toastify-js', 'toastifyPlugin')
.then(async () => {
    await fetch(`https://${window.location.hostname}/api/internal/graphql/getFullUserProfile`,{headers:{accept:"*/*","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","content-type":"application/json",priority:"u=1, i","sec-ch-ua":'"Chromium";v="134", "Not:A-Brand";v="24", "Brave";v="134"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","sec-gpc":"1","x-ka-fkey":"1"},referrer:"https://pt.khanacademy.org/profile/me/teacher/kaid_589810246138844031185299/class/6245691961556992",referrerPolicy:"strict-origin-when-cross-origin",body:'{"operationName":"getFullUserProfile","variables":{},"query":"query getFullUserProfile($kaid: String, $username: String) {\\n  user(kaid: $kaid, username: $username) {\\n    id\\n    kaid\\n    key\\n    userId\\n    email\\n    username\\n    profileRoot\\n    gaUserId\\n    isPhantom\\n    isDeveloper: hasPermission(name: \\"can_do_what_only_admins_can_do\\")\\n    isPublisher: hasPermission(name: \\"can_publish\\", scope: ANY_ON_CURRENT_LOCALE)\\n    isModerator: hasPermission(name: \\"can_moderate_users\\", scope: GLOBAL)\\n    isParent\\n    isTeacher\\n    isFormalTeacher\\n    isK4dStudent\\n    isKmapStudent\\n    isDataCollectible\\n    isChild\\n    isOrphan\\n    isCoachingLoggedInUser\\n    canModifyCoaches\\n    nickname\\n    hideVisual\\n    joined\\n    points\\n    countVideosCompleted\\n    bio\\n    profile {\\n      accessLevel\\n      __typename\\n    }\\n    soundOn\\n    muteVideos\\n    showCaptions\\n    prefersReducedMotion\\n    noColorInVideos\\n    newNotificationCount\\n    canHellban: hasPermission(name: \\"can_ban_users\\", scope: GLOBAL)\\n    canMessageUsers: hasPermission(\\n      name: \\"can_send_moderator_messages\\"\\n      scope: GLOBAL\\n    )\\n    isSelf: isActor\\n    hasStudents: hasCoachees\\n    hasClasses\\n    hasChildren\\n    hasCoach\\n    badgeCounts\\n    homepageUrl\\n    isMidsignupPhantom\\n    includesDistrictOwnedData\\n    includesKmapDistrictOwnedData\\n    includesK4dDistrictOwnedData\\n    canAccessDistrictsHomepage\\n    underAgeGate {\\n      parentEmail\\n      daysUntilCutoff\\n      approvalGivenAt\\n      __typename\\n    }\\n    authEmails\\n    signupDataIfUnverified {\\n      email\\n      emailBounced\\n      __typename\\n    }\\n    pendingEmailVerifications {\\n      email\\n      __typename\\n    }\\n    hasAccessToAIGuideCompanionMode\\n    hasAccessToAIGuideLearner\\n    hasAccessToAIGuideDistrictAdmin\\n    hasAccessToAIGuideParent\\n    hasAccessToAIGuideTeacher\\n    tosAccepted\\n    shouldShowAgeCheck\\n    birthMonthYear\\n    lastLoginCountry\\n    region\\n    userDistrictInfos {\\n      id\\n      isKAD\\n      district {\\n        id\\n        region\\n        __typename\\n      }\\n      __typename\\n    }\\n    schoolAffiliation {\\n      id\\n      location\\n      __typename\\n    }\\n    __typename\\n  }\\n  actorIsImpersonatingUser\\n  isAIGuideEnabled\\n  hasAccessToAIGuideDev\\n}"}',method:"POST",mode:"cors",credentials:"include"})
    .then(async response => { let data = await response.json(); user = { nickname: data.data.user.nickname, username: data.data.user.username, UID: data.data.user.id.slice(-5) }; })
    sendToast("🌿 EduHack injected successfully!");
    playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/gcelzszy.wav');
    await delay(500);
    sendToast(`⭐ Welcome back: ${user.nickname}`);
    loadedPlugins.forEach(plugin => sendToast(`🪝 ${plugin} Loaded!`, 2000, 'top') );
    hideSplashScreen();
    mainMenu();
    statusPanel();
    widgetBot();
    autoAnswer();
    minuteFarm();
    questionSpoof();
    videoSpoof();
    spoofUser();
    if(isDev) devTab();
    console.clear();
});
async function loadScript(url, label) { return fetch(url).then(response => response.text()).then(script => { loadedPlugins.push(label); eval(script); }); }
async function loadCss(url) { return new Promise((resolve) => { const link = document.createElement('link'); link.rel = 'stylesheet'; link.type = 'text/css'; link.href = url; link.onload = () => resolve(); document.head.appendChild(link); }); }