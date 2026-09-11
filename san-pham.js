/* =====================================================================
   DANH SÁCH SẢN PHẨM — CHỈ CẦN SỬA FILE NÀY ĐỂ ĐỔI GIÁ, ẢNH, DỊP LỄ
   (hoặc dùng trang Quản trị quan-tri.html cho tiện, khỏi gõ tay)
   =====================================================================
   Mỗi sản phẩm:
     • cat   : DỊP LỄ — dùng đúng 1 mã trong DANH MỤC bên dưới
               "hoi-khoa" | "20-11" | "tet" | "khac"
     • name  : Tên hiển thị
     • desc  : Mô tả ngắn
     • price : GIÁ (chỉ ghi SỐ). VD 150000 = 150.000đ
     • img   : ẢNH — bỏ ảnh vào thư mục anh/ rồi ghi tên, VD "anh/ao-polo.jpg".
               Để trống ("") sẽ hiện icon vẽ sẵn.
     • tag   : Nhãn góc ảnh (VD "Bán chạy"); để "" nếu không cần.
     • hide  : true = tạm ẩn khỏi trang.
   ===================================================================== */

/* DANH MỤC THEO DỊP — thêm/bớt/đổi tên tại đây (id không dấu, không cách) */
window.SHOP_CATEGORIES = [
  { id:"hoi-khoa", label:"Hội khóa 20 năm" },
  { id:"20-11",    label:"20/11 Nhà giáo" },
  { id:"tet",      label:"Tết Nguyên đán" },
  { id:"khac",     label:"Dịp khác" }
];

window.SHOP_PRODUCTS = [
  /* ===================== HỘI KHÓA 20 NĂM ===================== */
  { id:"ao-polo", cat:"hoi-khoa", name:"Áo polo",          desc:"Polo trắng phối xanh, thêu logo 20 năm, in được tên lớp.", price:200000, img:"anh/ao-polo.png", tag:"Bán chạy" },
  { id:"ao-thun", cat:"hoi-khoa", name:"Áo thun",          desc:"Áo thun cotton in logo & hình bóng học trò, đủ size.",     price:150000, img:"anh/ao-thun.png", tag:"" },
  { id:"mu",      cat:"hoi-khoa", name:"Mũ lưỡi trai",     desc:"Nón kết trắng–xanh thêu biểu tượng hội khóa.",             price:90000,  img:"anh/mu-luoi-trai.png", tag:"" },
  { id:"binh",    cat:"hoi-khoa", name:"Bình giữ nhiệt",   desc:"Bình giữ nhiệt inox in logo, khắc được tên lớp.",          price:180000, img:"anh/binh-giu-nhiet.png", tag:"" },
  { id:"tui",     cat:"hoi-khoa", name:"Túi vải",          desc:"Túi vải canvas in logo, bền & tiện dùng hằng ngày.",       price:85000,  img:"anh/tui-vai.png", tag:"" },
  { id:"moc-khoa",cat:"hoi-khoa", name:"Móc khóa",         desc:"Móc khóa kim loại in logo, khắc được tên & lớp.",          price:45000,  img:"anh/moc-khoa.png", tag:"" },
  { id:"chuong",  cat:"hoi-khoa", name:"Kỷ niệm chương",   desc:"Kỷ niệm chương pha lê khắc logo 20 năm, đế trang trọng.",  price:250000, img:"anh/ky-niem-chuong.png", tag:"Sang trọng" },
  { id:"hop-qua", cat:"hoi-khoa", name:"Hộp quà kỷ niệm",  desc:"Set quà: bình giữ nhiệt + móc khóa + thiệp, đóng hộp đẹp.",price:350000, img:"anh/hop-qua.png", tag:"Set quà" },
  { id:"am-chen", cat:"hoi-khoa", name:"Bộ ấm chén",       desc:"Bộ ấm chén sứ (1 ấm, 6 chén, 6 đĩa, 1 hũ trà) in logo 20 năm.", price:450000, img:"anh/am-chen.png", tag:"" },

  /* ===================== 20/11 NHÀ GIÁO (mẫu — chỉnh lại giá/ảnh) ===================== */
  { id:"nv-hoa",   cat:"20-11", name:"Bó hoa tri ân thầy cô", desc:"Bó hoa tươi kèm thiệp lời chúc 20/11.",              price:150000, img:"", tag:"" },
  { id:"nv-thiep", cat:"20-11", name:"Thiệp 20/11 (bộ 10)",   desc:"Bộ thiệp chúc mừng Ngày Nhà giáo, in theo lớp.",     price:50000,  img:"", tag:"" },
  { id:"nv-coc",   cat:"20-11", name:"Cốc sứ tri ân",         desc:"Cốc sứ in lời chúc & tên thầy cô.",                  price:90000,  img:"", tag:"" },
  { id:"nv-qua",   cat:"20-11", name:"Bộ quà tri ân thầy cô", desc:"Set quà: bình giữ nhiệt + thiệp + hoa lụa.",         price:250000, img:"", tag:"Set quà" },

  /* ===================== TẾT NGUYÊN ĐÁN (mẫu — chỉnh lại giá/ảnh) ===================== */
  { id:"tet-lich", cat:"tet", name:"Lịch Tết để bàn",   desc:"Lịch để bàn in hình trường & logo hội khóa.",  price:80000,  img:"", tag:"" },
  { id:"tet-lixi", cat:"tet", name:"Bao lì xì (bộ 20)", desc:"Bao lì xì in logo lớp, mẫu Tết.",              price:40000,  img:"", tag:"" },
  { id:"tet-gio",  cat:"tet", name:"Giỏ quà Tết",       desc:"Giỏ quà Tết cho lớp/thầy cô, gói sẵn đẹp.",    price:350000, img:"", tag:"Set quà" },
  { id:"tet-ao",   cat:"tet", name:"Áo thun Tết lớp",   desc:"Áo thun đồng phục chụp ảnh Tết theo lớp.",     price:150000, img:"", tag:"" },

  /* ===================== DỊP KHÁC: Khai giảng / 20/10 / 8/3 (mẫu) ===================== */
  { id:"kh-hoa", cat:"khac", name:"Hoa 20/10 · 8/3",   desc:"Bó hoa tặng cô/bạn dịp 20/10, 8/3.",           price:120000, img:"", tag:"" },
  { id:"kh-so",  cat:"khac", name:"Sổ tay khai giảng", desc:"Sổ tay in logo, quà khai giảng năm học.",      price:60000,  img:"", tag:"" }

  // Thêm sản phẩm: copy một dòng, đổi id (không trùng), đặt đúng cat của dịp.
];

/* Icon vẽ sẵn theo id (dùng khi img để trống). id mới -> mặc định "i-gift". */
window.SHOP_ICON_BY_ID = {
  "ao-polo":"p-shirt","ao-thun":"p-shirt","mu":"p-cap","binh":"p-bottle",
  "tui":"p-tote","moc-khoa":"p-keychain","chuong":"p-award","hop-qua":"i-gift","am-chen":"p-mug",
  "nv-hoa":"p-flower","nv-thiep":"p-book","nv-coc":"p-mug","nv-qua":"i-gift",
  "tet-lich":"p-calendar","tet-lixi":"i-gift","tet-gio":"i-gift","tet-ao":"p-shirt",
  "kh-hoa":"p-flower","kh-so":"p-book"
};
