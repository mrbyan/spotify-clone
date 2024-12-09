import { Router } from "express";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { User } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        // const totalSongs = await Song.countDocuments();
        // const totalUsers = await User.countDocuments();
        // const totalAlbums = await Album.countDocuments();

        const [totalSongs, totalUsers, totalAlbums] = await Promise.all([
            Song.countDocuments(),
            User.countDocuments(),
            Album.countDocuments(),
        ]);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
