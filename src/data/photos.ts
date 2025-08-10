import profile from "@/assets/profile/image.png";
import h1 from "@/assets/highlights/image.png";
import h2 from "@/assets/highlights/image copy.png";
import h3 from "@/assets/highlights/image copy 2.png";
import h4 from "@/assets/highlights/image copy 3.png";
import h5 from "@/assets/highlights/image copy 4.png";
import p1 from "@/assets/photos/Screenshot 2025-08-10 at 12-00-01 Instagram.png";
import p2 from "@/assets/photos/Screenshot 2025-08-10 at 12-00-11 Instagram.png";
import p3 from "@/assets/photos/Screenshot 2025-08-10 at 12-00-19 Instagram.png";
import p4 from "@/assets/photos/Screenshot 2025-08-10 at 12-00-33 Instagram.png";
import p5 from "@/assets/photos/Screenshot 2025-08-10 at 12-00-43 Instagram.png";
import p6 from "@/assets/photos/Screenshot 2025-08-10 at 12-01-04 Instagram.png";
import p7 from "@/assets/photos/Screenshot 2025-08-10 at 12-01-12 Instagram.png";
import p8 from "@/assets/photos/Screenshot 2025-08-10 at 12-01-22 Instagram.png";
import p9 from "@/assets/photos/Screenshot 2025-08-10 at 12-01-30 Instagram.png";

export const profileData = {
  username: "sarthack.sharma",
  name: "Sarthak Sharma",
  bio: "Making Impact.\n @sheryians_coding_school 🚀\n Tech Creator | Full Stack Developer",
  website: "saarthack.github.io/portfolio",
  avatar: profile,
  counts: {
    posts: 19,
    followers: "10.3k",
    following: 289,
  },
};

export const highlights = [
  { id: "h1", title: "Travel", cover: h1 },
  { id: "h2", title: "Work", cover: h2 },
  { id: "h3", title: "Food", cover: h3 },
  { id: "h4", title: "Daily", cover: h4 },
  { id: "h5", title: "Mood", cover: h5 },
];

export const photos = [
  { id: "p1", src: p1, alt: "Coffee on marble", likes: 324, comments: 18 },
  { id: "p2", src: p2, alt: "Architecture facade", likes: 512, comments: 42 },
  { id: "p3", src: p3, alt: "Indoor plant", likes: 289, comments: 9 },
  { id: "p4", src: p4, alt: "Sneakers shadow", likes: 403, comments: 27 },
  { id: "p5", src: p5, alt: "Workspace flatlay", likes: 377, comments: 21 },
  { id: "p6", src: p6, alt: "Neon reflections", likes: 621, comments: 53 },
  { id: "p7", src: p7, alt: "Pastry close-up", likes: 245, comments: 13 },
  {
    id: "p8",
    src: p8,
    alt: "Concrete texture shadow",
    likes: 199,
    comments: 11,
  },
  { id: "p9", src: p9, alt: "Geometric staircase", likes: 458, comments: 38 },
];
