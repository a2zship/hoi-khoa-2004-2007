/* =====================================================================
   DANH SÁCH SẢN PHẨM — CHỈ CẦN SỬA FILE NÀY ĐỂ ĐỔI GIÁ, ẢNH, DỊP LỄ
   (hoặc dùng trang Quản trị quan-tri.html cho tiện, khỏi gõ tay)
   =====================================================================
   Mỗi sản phẩm:
     • cat   : NHÓM — dùng đúng 1 mã trong DANH MỤC bên dưới
               "dong-phuc" | "do-dung" | "qua-tang"
     • name  : Tên hiển thị
     • desc  : Mô tả ngắn
     • price : GIÁ (chỉ ghi SỐ). VD 150000 = 150.000đ
     • img   : ẢNH — bỏ ảnh vào thư mục anh/ rồi ghi tên, VD "anh/ao-polo.jpg".
               Để trống ("") sẽ hiện icon vẽ sẵn.
     • tag   : Nhãn góc ảnh (VD "Bán chạy"); để "" nếu không cần.
     • hide  : true = tạm ẩn khỏi trang.
   ===================================================================== */

/* DANH MỤC (nhóm vật phẩm hội khóa) — thêm/bớt/đổi tên tại đây (id không dấu, không cách)
   Quà các dịp lễ (20/11, Tết…) đã chuyển sang trang riêng qua-gay-quy.html / Quà tri ân. */
window.SHOP_CATEGORIES = [
  { id:"dong-phuc", label:"Áo & mũ" },
  { id:"do-dung",   label:"Đồ dùng in logo" },
  { id:"qua-tang",  label:"Quà tặng & kỷ niệm" }
];

window.SHOP_PRODUCTS = [
  /* ===================== HỘI KHÓA 20 NĂM ===================== */
  // ÁO: tạm ẨN khỏi gian hàng (Sếp yêu cầu 20/11/2026) — áo đồng phục đăng ký size ở trang đăng ký. Bỏ "hide:true" để bán lại.
  { id:"ao-polo", cat:"dong-phuc", name:"Áo polo (mẫu 1)",   desc:"Polo trắng phối xanh, thêu logo 20 năm, in được tên lớp.", price:200000, img:"anh/ao-polo.png", tag:"Bán chạy", variant:"ao", hide:true },
  { id:"ao-polo-2", cat:"dong-phuc", name:"Áo polo (mẫu 2)", desc:"Polo trắng cổ & bo tay xanh, thêu logo 20 năm 'Gặp lại thanh xuân'.", price:200000, img:"anh/ao-polo-2.jpg", tag:"Mẫu mới", variant:"ao", hide:true },
  { id:"ao-thun", cat:"dong-phuc", name:"Áo thun",          desc:"Áo thun cotton in logo & hình bóng học trò, đủ size.",     price:150000, img:"anh/ao-thun.png", tag:"", variant:"ao", hide:true },
  { id:"mu",      cat:"do-dung", name:"Mũ lưỡi trai",     desc:"Nón kết trắng–xanh thêu biểu tượng hội khóa.",             price:90000,  img:"anh/mu-luoi-trai.png", tag:"" },
  { id:"binh",    cat:"do-dung", name:"Bình giữ nhiệt",   desc:"Bình giữ nhiệt inox in logo, khắc được tên lớp.",          price:180000, img:"anh/binh-giu-nhiet.png", tag:"" },
  { id:"tui",     cat:"do-dung", name:"Túi vải",          desc:"Túi vải canvas in logo, bền & tiện dùng hằng ngày.",       price:85000,  img:"anh/tui-vai.png", tag:"" },
  { id:"moc-khoa",cat:"do-dung", name:"Móc khóa",         desc:"Móc khóa kim loại in logo, khắc được tên & lớp.",          price:45000,  img:"anh/moc-khoa.png", tag:"", hide:true }, // TẠM ẨN: ảnh lỗi chính tả "thank"->"thanh", chờ ảnh sửa
  { id:"chuong",  cat:"qua-tang", name:"Kỷ niệm chương",   desc:"Kỷ niệm chương pha lê khắc logo 20 năm, đế trang trọng.",  price:250000, img:"anh/ky-niem-chuong.png", tag:"Sang trọng" },
  { id:"hop-qua", cat:"qua-tang", name:"Hộp quà kỷ niệm",  desc:"Set quà: bình giữ nhiệt + móc khóa + thiệp, đóng hộp đẹp.",price:350000, img:"anh/hop-qua.png", tag:"Set quà" },
  { id:"am-chen", cat:"qua-tang", name:"Bộ ấm chén",       desc:"Bộ ấm chén sứ (1 ấm, 6 chén, 6 đĩa, 1 hũ trà) in logo 20 năm.", price:450000, img:"anh/am-chen.png", tag:"" },

  /* ===== BỘ SƯU TẬP MỚI (ảnh minh họa in logo hội khóa, giá theo bảng giá nhà cung cấp) ===== */
  { id:"hk-but-ky",       cat:"do-dung",  name:"Bút ký kim loại",          desc:"Thân kim loại, khắc logo và dòng \"Hội khóa 2004 – 2007\".", price:39000,  img:"anh/hk-but-ky.jpg", tag:"" },
  { id:"hk-coc-lac",      cat:"do-dung",  name:"Cốc lắc 600 ml",           desc:"Cốc lắc thể thao 600 ml, in logo 20 năm 1 màu trắng.",          price:89000,  img:"anh/hk-coc-lac.jpg", tag:"" },
  { id:"hk-tui-gia-day",  cat:"do-dung",  name:"Túi vải giả đay",          desc:"Túi giả đay quai mềm, in logo 20 năm nhiều màu (in PET).",       price:189000, img:"anh/hk-tui-gia-day.jpg", tag:"Mẫu mới" },
  { id:"hk-coc-giu-nhiet",cat:"do-dung",  name:"Cốc giữ nhiệt 530 ml",     desc:"Cốc giữ nhiệt có quai xách, in logo nhiều màu, kèm hộp quà.",    price:299000, img:"anh/hk-coc-giu-nhiet.jpg", tag:"" },
  { id:"hk-dong-ho-treo", cat:"qua-tang", name:"Đồng hồ treo tường",       desc:"Đồng hồ 27 × 27 cm, mặt trắng in logo 20 năm, kèm hộp xách.",   price:139000, img:"anh/hk-dong-ho-treo.jpg", tag:"" },
  { id:"hk-bo-6-ly",      cat:"qua-tang", name:"Bộ 6 ly thủy tinh",        desc:"6 ly 220 ml in logo nhũ vàng, đựng trong hộp quà cứng.",          price:159000, img:"anh/hk-bo-6-ly.jpg", tag:"" },
  { id:"hk-bo-binh-coc",  cat:"qua-tang", name:"Bộ bình giữ nhiệt & cốc sứ", desc:"Bình giữ nhiệt + cốc sứ in logo 20 năm, hộp cứng lót định hình.", price:329000, img:"anh/hk-bo-binh-coc.jpg", tag:"Set quà" },
  { id:"hk-bo-o-coc",     cat:"qua-tang", name:"Bộ ô gấp & cốc giữ nhiệt", desc:"Ô gấp in chữ hội khóa + cốc giữ nhiệt in logo, hộp quà dạng sách.", price:529000, img:"anh/hk-bo-o-coc.jpg", tag:"Đặt trước" },
  { id:"hk-dong-ho-pha-le",cat:"qua-tang",name:"Đồng hồ pha lê",           desc:"Đồng hồ để bàn pha lê khắc logo 20 năm, đế đen, kèm hộp nhung.",  price:649000, img:"anh/hk-dong-ho-pha-le.jpg", tag:"Đặt trước" }

  // Thêm sản phẩm: copy một dòng, đổi id (không trùng), đặt đúng cat của dịp.
];

/* Icon vẽ sẵn theo id (dùng khi img để trống). id mới -> mặc định "i-gift". */
window.SHOP_ICON_BY_ID = {
  "ao-polo":"p-shirt","ao-polo-2":"p-shirt","ao-thun":"p-shirt","mu":"p-cap","binh":"p-bottle",
  "tui":"p-tote","moc-khoa":"p-keychain","chuong":"p-award","hop-qua":"i-gift","am-chen":"p-mug",
  "hk-but-ky":"p-pin","hk-coc-lac":"p-bottle","hk-tui-gia-day":"p-tote","hk-coc-giu-nhiet":"p-mug",
  "hk-dong-ho-treo":"p-calendar","hk-bo-6-ly":"p-mug","hk-bo-binh-coc":"i-gift","hk-bo-o-coc":"i-gift","hk-dong-ho-pha-le":"p-award"
};
