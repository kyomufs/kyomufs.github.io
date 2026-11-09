/* Authoritative single source of truth for all skills across kyomufs.github.io */

export const SKILLS_DATA = [
  {
    id: "cat-lang",
    icon: "code",
    color: "#7aa2f7",
    en: "Languages & Runtimes",
    ru: "Языки и рантаймы",
    items: ["C", "C++", "ASM", "Go", "TypeScript", "JavaScript", "Python", "Bash", "R", "Dart", "Kotlin"]
  },
  {
    id: "cat-sys",
    icon: "dns",
    color: "#bb9af7",
    en: "Systems & Distros",
    ru: "Системы и дистрибутивы",
    items: ["NixOS", "Arch Linux", "Debian", "Ubuntu", "Linux", "systemd", "Docker", "Caddy", "nginx", "CI/CD (GitHub)", "Git", "GitHub", "Gitea"]
  },
  {
    id: "cat-wm",
    icon: "desktop_windows",
    color: "#2ac3de",
    en: "Wayland & Desktops",
    ru: "Wayland & Десктоп",
    items: ["Hyprland", "Niri", "MangoWM", "KDE Plasma", "GNOME", "Quickshell", "Qt / QML", "Layer Shell"]
  },
  {
    id: "cat-web",
    icon: "layers",
    color: "#7dcfff",
    en: "Client & Mobile",
    ru: "Клиент & Мобилка",
    items: ["Flutter", "React", "Node.js", "Jetpack Compose"]
  },
  {
    id: "cat-data",
    icon: "database",
    color: "#73daca",
    en: "Databases & Cache",
    ru: "Базы данных и кеш",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "SQLAlchemy"]
  },
  {
    id: "cat-net",
    icon: "hub",
    color: "#ff9e64",
    en: "Network Systems & Protocols",
    ru: "Сетевые протоколы & Edge",
    items: ["RouterOS (MikroTik)", "OpenWrt", "gRPC", "REST API", "WebSocket", "WireGuard & Overlays", "Policy Routing (PBR)", "VLAN (802.1Q)", "Mihomo & Clash", "Encrypted DNS", "nftables", "KeeneticOS"]
  },
  {
    id: "cat-ai",
    icon: "auto_awesome",
    color: "#f7768e",
    en: "AI, LLMs & Autonomous Agents",
    ru: "AI, LLM & Агенты",
    items: ["DeepSeek Harness", "MCP (Model Context Protocol)", "llama.cpp", "PyTorch", "OpenCode", "Hermes Agent", "Copilot", "Crush", "LoRA Fine-tuning"]
  }
];

export const CROSS_EDGES = [
  ['dart', 'flutter'],
  ['kotlin', 'compose'],
  ['ts', 'node'],
  ['ts', 'react'],
  ['js', 'ts'],
  ['nixos', 'linux'],
  ['nixos', 'systemd'],
  ['nixos', 'hyprland'],
  ['nixos', 'bash'],
  ['arch', 'linux'],
  ['debian', 'ubuntu'],
  ['docker', 'caddy'],
  ['docker', 'nginx'],
  ['hyprland', 'quickshell'],
  ['niri', 'layershell'],
  ['kde', 'qml'],
  ['quickshell', 'qml'],
  ['cpp', 'qml'],
  ['c', 'cpp'],
  ['c', 'asm'],
  ['py', 'sa'],
  ['py', 'pytorch'],
  ['postgres', 'sa'],
  ['py', 'lora'],
  ['dsh', 'opencode'],
  ['dsh', 'mcp'],
  ['dsh', 'ts'],
  ['llamacpp', 'c'],
  ['llamacpp', 'cpp'],
  ['go', 'grpc'],
  ['go', 'caddy'],
  ['wireguard', 'linux'],
  ['nftables', 'linux'],
  ['mihomo', 'go'],
  ['routeros', 'openwrt'],
  ['mangowm', 'linux'],
  ['redis', 'node'],
  ['ws', 'node']
];
