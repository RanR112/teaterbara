import imageProp from "../assets/images/logo.png";
import type { TeamMember } from "../types/team.types";

export const TEAM_MEMBER: TeamMember[] = [
    {
        id: 1,
        name: "Ahmad Rizki",
        role: "Ketua Teater Bara",
        quote: "Seni adalah jembatan menuju pemahaman",
        image: imageProp,
        alt: "Image",
    },
    {
        id: 2,
        name: "Siti Nurhaliza",
        role: "Sutradara Utama",
        quote: "Setiap pentas adalah cerita yang hidup",
        image: imageProp,
        alt: "Image",
    },
    {
        id: 3,
        name: "Budi Santoso",
        role: "Koordinator Pelatihan",
        quote: "Latihan adalah kunci kesempurnaan",
        image: imageProp,
        alt: "Image",
    },
];
