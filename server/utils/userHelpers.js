export const isApprovedOwner = (user) =>
    user?.role === "hotelOwner" &&
    (user.ownerStatus === "approved" || user.ownerStatus === undefined);

export const formatUser = (user) => ({
    _id: user._id,
    email: user.email,
    username: user.username,
    image: user.image,
    phone: user.phone || "",
    bio: user.bio || "",
    role: user.role,
    ownerStatus: user.ownerStatus || "none",
    rejectionReason: user.rejectionReason || "",
    isOwner: isApprovedOwner(user),
    isAdmin: user.role === "admin",
});
