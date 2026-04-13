export type Skill = {
  name: string;
  level: number;
  category: string;
};

export const profile = {
  name: "I Komang Swastika Adnyana",
  nickname: "Swastika",
  nim: "2205551XXX",
  jurusan: "Informatika",
  universitas: "Universitas Udayana",
  angkatan: "2022",
  bio: "Mahasiswa Informatika yang antusias dalam pengembangan web modern. Suka membangun antarmuka yang bersih, cepat, dan mudah digunakan. Sedang mendalami Next.js, TypeScript, dan ekosistem web modern.",
  email: "swastika@student.unud.ac.id",
  github: "https://github.com/suastika805-hash",
  location: "Bali, Indonesia",
  available: true,
};

export const skills: Skill[] = [
  { name: "HTML & CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "TypeScript", level: 60, category: "Frontend" },
  { name: "React.js", level: 70, category: "Frontend" },
  { name: "Next.js", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "PHP", level: 70, category: "Backend" },
  { name: "MySQL", level: 65, category: "Backend" },
  { name: "Node.js", level: 50, category: "Backend" },
  { name: "Git & GitHub", level: 75, category: "Tools" },
  { name: "Figma", level: 55, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

export const skillCategories = ["Frontend", "Backend", "Tools"];

export const stats = [
  { label: "Proyek Selesai", value: "4+" },
  { label: "Teknologi", value: "10+" },
  { label: "Tahun Belajar", value: "3+" },
  { label: "Komitmen", value: "100%" },
];
