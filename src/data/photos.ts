import profile from "@/assets/profile/profile.jpg";
import h1 from "@/assets/highlights/highlight-01.jpg";
import h2 from "@/assets/highlights/highlight-02.jpg";
import h3 from "@/assets/highlights/highlight-03.jpg";
import h4 from "@/assets/highlights/highlight-04.jpg";
import h5 from "@/assets/highlights/highlight-05.jpg";
import p1 from "@/assets/photos/photo-01.jpg";
import p2 from "@/assets/photos/photo-02.jpg";
import p3 from "@/assets/photos/photo-03.jpg";
import p4 from "@/assets/photos/photo-04.jpg";
import p5 from "@/assets/photos/photo-05.jpg";
import p6 from "@/assets/photos/photo-06.jpg";
import p7 from "@/assets/photos/photo-07.jpg";
import p8 from "@/assets/photos/photo-08.jpg";
import p9 from "@/assets/photos/photo-09.jpg";

export const profileData = {
  username: "modern.creative",
  name: "Modern Creative",
  bio: "Design • Coffee • Minimalism\nBuilding small things with great love.",
  website: "https://example.com",
  avatar: profile,
  counts: {
    posts: 342,
    followers: "12.8k",
    following: 842,
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
  { id: "p8", src: p8, alt: "Concrete texture shadow", likes: 199, comments: 11 },
  { id: "p9", src: p9, alt: "Geometric staircase", likes: 458, comments: 38 },
];
