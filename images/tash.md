# CODING AGENT SPECIFICATION
# SIX YEARS, ONE QUESTION — A CINEMATIC CONFESSION WEBSITE

## 1. MỤC TIÊU DỰ ÁN

Xây dựng một website tỏ tình độc lập, kể câu chuyện tình cảm bằng 8 bức ảnh thật của hai người, hiệu ứng chuyển động cinematic, controlled scroll và một tương tác hỏi tỏ tình ở cao trào.

**Thông điệp trung tâm:**
- Người nhận: Bé Cam.
- Người gửi: Anh.
- Cảm xúc cốt lõi: Anh đã thương Bé Cam suốt 6 năm và những gì đã trải qua giờ anh có thể trao danh phận cho em được không?.
- Câu hỏi cuối cùng: “Bé Cam đồng ý để anh trở thành người yêu của em nhé?”
- Món quà cuối: 1 hột quà khi nhấn vào sẽ có bó hoa mà tôi đã chuẩn bị.

Website phải tạo cảm giác như một bộ phim ngắn được dựng từ những kỷ niệm thật, không phải slideshow ảnh, landing page bán hàng hoặc một website hoạt hình trang trí bằng trái tim.

### Mục tiêu trải nghiệm

1. Thu hút sự chú ý ngay trong màn hình đầu tiên.
2. Dùng ảnh thật để khơi gợi cảm xúc và kể chuyện.
3. Dẫn dắt cảm xúc từ hoài niệm đến chân thành, sau đó đến lời tỏ tình.
4. Tạo một khoảnh khắc yên tĩnh trước câu hỏi quan trọng.
5. Cho Bé Cam tự do lựa chọn câu trả lời.
6. Kết thúc bằng một module quà tặng dễ tùy biến.

**Nguyên tắc bắt buộc:** Ưu tiên cảm xúc, hình ảnh, không gian và nhịp điệu. Không nhồi nhét chữ, không dùng hiệu ứng chỉ để trang trí, không ép người xem đưa ra câu trả lời.

---

## 2. ART DIRECTION

### Concept

Tên nội bộ: `Six Years, One Question`

Tên hiển thị: `SIX YEARS, ONE QUESTION`

Tagline:

“Có một điều ước mà anh đã luôn mơ về nó.”

Phong cách tổng thể:
- Cinematic editorial.
- Romantic, intimate, nostalgic.
- Ảnh đời thường được xử lý như các khung hình trong phim.
- Kết hợp màu film, chiều sâu không gian, typography lớn và khoảng trống có chủ đích.
- Cảm xúc chân thật, trưởng thành, không sến quá mức.

### Bảng màu

```css
:root {
  --color-bg: #100D10;
  --color-bg-soft: #19151A;
  --color-wine: #9d3155ff;
  --color-rose: #C39A91;
  --color-ivory: #F4EEE7;
  --color-muted: #B7AAA7;

  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
}
```

Dùng nền đen than làm chủ đạo, xanh biển trầm lấy cảm hứng từ ảnh đi biển, trắng ngà cho nội dung và hồng đất cho điểm nhấn.

Không dùng gradient hồng tím rực, neon, viền phát sáng dày hoặc nhiều màu nhấn cùng lúc.

### Typography

- Tiêu đề cảm xúc: Cormorant Garamond, trọng lượng 400–500.
- Nội dung tiếng Việt: Inter, trọng lượng 400–500.
- Nhãn scene: sans-serif viết hoa, letter spacing rộng.
- Chỉ dùng tối đa hai họ font chính.
- Ưu tiên bộ font có dấu tiếng Việt đầy đủ và kiểm tra dấu trên cả chữ hoa lẫn chữ thường.
- Dùng `clamp()` để điều chỉnh kích thước theo viewport.
- Không viết mọi câu thành chữ hoa.
- Không để đoạn văn có chiều rộng quá lớn.

Quy tắc phân cấp: mỗi scene chỉ có một tiêu đề chính. Nội dung phụ tối đa 1–3 câu ngắn. Nếu cần viết dài hơn, chia thành nhiều nhịp xuất hiện thay vì hiển thị thành một khối chữ.

---

## 3. ASSET INVENTORY — PHÂN CÔNG 8 ẢNH

Tất cả ảnh phải là ảnh gốc do người dùng cung cấp. Không tạo lại khuôn mặt bằng AI, không thay trang phục, không thay đổi đặc điểm nhận diện và không bóp méo tỷ lệ cơ thể.

### Photo 01 — Selfie trước cửa cuốn

Đặc điểm: Bé Cam giơ tay chữ V, anh đứng gần camera, ánh sáng trong nhà hơi vàng.

Vai trò:
- Ảnh phụ cho cảnh “Những điều nhỏ bé”.
- Phù hợp với bố cục crop cận và hiệu ứng parallax nhẹ.
- Không nên dùng làm hero chính vì khung hình cận và hậu cảnh nhiều chi tiết.

### Photo 02 — Ảnh hai người ở bãi biển

Đặc điểm: Hai người đứng cạnh biển, nền trời nhiều mây, khung ảnh vuông, tông xanh lạnh.

Vai trò chính:
- Hero mở đầu.
- Ảnh nền của scene kể về 6 năm.
- Có thể xuất hiện lần thứ hai ở cuối với crop và cách xử lý ánh sáng khác.

Đây là ảnh phù hợp nhất để tạo không gian cinematic vì nền trời và mặt biển cung cấp các vùng hình ảnh rộng.

Cách xử lý:
- Dùng `object-fit: cover` cho hero mobile.
- Tự điều chỉnh `object-position` để giữ mặt và cơ thể của cả hai trong khung.
- Tối ưu riêng crop mobile và desktop.
- Chỉ zoom nhẹ, không phóng quá mức làm mất chủ thể.

### Photo 03 — Selfie cận mặt trong nhà

Đặc điểm: Hai khuôn mặt gần camera, ánh sáng ấm, cảm giác tự nhiên và thân mật.

Vai trò:
- Scene tập trung vào cảm xúc.
- Có thể làm ảnh foreground trong bố cục nhiều lớp.
- Không crop mất mắt, cằm hoặc đường viền khuôn mặt.

### Photo 04 — Ảnh photobooth có viền trắng

Đặc điểm: Ảnh có chất film, hạt nhiễu nhẹ, bố cục giống ảnh in.

Vai trò:
- Tấm ảnh trung tâm của scene hoài niệm.
- Tạo một physical photo frame giả lập có bóng đổ, độ nghiêng nhẹ và parallax.
- Giữ nguyên viền trắng như một phần của ảnh gốc.
- Không biến thành card bo góc kiểu giao diện ứng dụng.

### Photo 05 — Selfie với phụ kiện đỏ, Bé Cam cười tươi

Đặc điểm: Gương mặt Bé Cam nổi bật ở tiền cảnh, biểu cảm vui tươi, anh đứng phía sau.

Vai trò:
- Một điểm sáng cảm xúc trong montage.
- Có thể xuất hiện lại ở phần quà cuối nếu phù hợp.
- Không sử dụng hiệu ứng làm mất màu sắc đặc trưng của ảnh.

### Photo 06 — Ảnh trước tường nhiều ảnh, đội mũ

Đặc điểm: Hai người tạo dáng vui nhộn trước một bức tường đầy ảnh.

Vai trò:
- Một trong các ảnh tạo nhịp vui vẻ cho montage.
- Dùng trong bố cục ảnh film nhiều lớp.
- Giữ nguyên các chi tiết phụ kiện có trong ảnh.

### Photo 07 — Selfie trong nhà, cả hai giơ tay chữ V

Đặc điểm: Hai người đứng gần nhau, biểu cảm vui vẻ, áo có màu sắc nổi bật.

Vai trò:
- Ảnh chuyển tiếp từ montage vui tươi sang đoạn tình cảm.
- Có thể crop thành khung dọc nhưng phải giữ được cả hai khuôn mặt.

### Photo 08 — Selfie ngoài trời trong rừng

Đặc điểm: Bé Cam ở tiền cảnh, anh đứng phía sau, nền cây xanh tạo nhiều lớp không gian tự nhiên.

Vai trò:
- Ảnh dùng để tạo parallax nhiều lớp.
- Phù hợp với kỹ thuật foreground/background separation nếu công cụ hỗ trợ.
- Nếu không tách được chủ thể sạch, dùng một ảnh nguyên bản với chuyển động camera giả lập. Không dùng mask lỗi quanh tóc, mặt hoặc vai.

### Quy tắc quản lý asset

Chuẩn hóa tên file trong dự án:

```text
images/
  photo-01-selfie-gate.webp
  photo-02-beach.webp
  photo-03-close-selfie.webp
  photo-04-photobooth.webp
  photo-05-red-accessories.webp
  photo-06-photo-wall.webp
  photo-07-peace-selfie.webp
  photo-08-forest-selfie.webp
```

Đổi định dạng sang WebP hoặc AVIF sau khi đã xác định crop và chất lượng phù hợp. Giữ bản gốc riêng nếu cần quay lại xử lý.

Các đường dẫn nguồn hiện có trong môi trường làm việc:

- Photo 01: `/mnt/data/1791531518165_558200490750654496_7371787182265936850_d71d8fa59b3e51e90b8353ac7ce5fcc3.webp`
- Photo 02: `/mnt/data/1791531517965_558200490750654496_7371787182265936850_d79cf294f9a92b9c5cc1daa230ffdd22.webp`
- Photo 03: `/mnt/data/1791531518022_558200490750654496_7371787182265936850_2da6b63198d52956192f5fe097052a08.webp`
- Photo 04: `/mnt/data/1791531518152_558200490750654496_7371787182265936850_8fc4672b2e7ba7b3265459c67a543a1f.webp`
- Photo 05: `/mnt/data/1791531518038_558200490750654496_7371787182265936850_0147b13a50bb6c3db6a7c270966f9265.webp`
- Photo 06: `/mnt/data/1791531518046_558200490750654496_7371787182265936850_fc9f9c9f8e2ae32084c1330fc209bb5e.webp`
- Photo 07: `/mnt/data/1791531518075_558200490750654496_7371787182265936850_290e98c63769b8182010704dc3399892.webp`
- Photo 08: `/mnt/data/1791531518097_558200490750654496_7371787182265936850_a1bc931daf84387e9a6922c1a3ae9b7a.webp`

Nếu các đường dẫn nguồn không còn tồn tại trong môi trường coding agent, tìm lại các asset đã được đính kèm trong workspace. Không tạo ảnh thay thế khi ảnh thật chưa được tìm thấy.

---

## 4. STORYBOARD — 7 SCENE

Toàn bộ câu chuyện gồm 7 scene. Đây là một hành trình cuộn liên tục, không phải 7 trang tách biệt.

Các thời lượng trong timeline dưới đây là thời gian tham chiếu khi chạy animation độc lập. Khi cuộn trang, hãy ánh xạ chuyển động vào `scroll progress` từ 0 đến 1. Không ép người xem phải cuộn theo thời gian cố định.

### SCENE 00 — THE INVITATION

**Mục tiêu:** Tạo tò mò trong vài giây đầu.

**Ảnh:** Photo 02, ảnh bãi biển.

**Bố cục:**
- Chiếm toàn bộ viewport.
- Ảnh nằm dưới lớp phủ tối.
- Tiêu đề đặt ở vùng có độ tương phản tốt.
- Chỉ một lời mời tương tác ở phần dưới.

**Copy:**

Nhãn nhỏ:

`A STORY FOR BÉ CAM`

Tiêu đề:

“Bé Cam, có một điều anh muốn nói với em…”

Nút:

`Mình bắt đầu nhé`

Chỉ dẫn nhỏ:

`CUỘN ĐỂ TIẾP TỤC`

**Motion timeline:**

- 0–500 ms: nền tối, ảnh hiện rất mờ.
- 300–1.300 ms: ảnh fade in từ opacity 0 đến 1, scale từ 1.06 về 1.
- 700–1.400 ms: tiêu đề xuất hiện với opacity và translateY từ 18px về 0.
- 1.200–1.800 ms: nút bắt đầu xuất hiện.
- Sau khi tương tác: cuộn đến scene tiếp theo bằng chuyển động mượt.

**Chi tiết chuyển động:**
- Có thể thêm một lớp grain rất nhẹ bằng texture tĩnh.
- Không thêm pháo hoa hoặc trái tim bay.
- Không tự phát âm thanh.
- Không chạy intro quá lâu trước khi cho phép người xem tương tác.

### SCENE 01 — SIX YEARS

**Mục tiêu:** Đặt nền tảng cảm xúc của câu chuyện.

**Ảnh:** Photo 02 tiếp tục là ảnh chính.

**Copy:**

Tiêu đề:

“Sáu năm.”

Đoạn 1:

“Anh vẫn luôn thương em suốt thời gian qua.”

Đoạn 2:

"Em đã biết điều này rồi"

Đoạn 3:

“Và hôm nay, anh muốn trao cho em một danh phận đàng hoàng.”

Các đoạn là bản nháp có thể chỉnh sửa. Không tự thêm tình tiết như lần đầu gặp, một ngày kỷ niệm cụ thể hoặc một lời hứa trong quá khứ nếu chưa được cung cấp.

**Bố cục:**
- Ảnh chiếm gần toàn bộ vùng hiển thị.
- Typography đặt ở khoảng trời hoặc vùng âm bản.
- Có thể đặt dòng “Sáu năm” lớn hơn nội dung còn lại.
- Hạn chế các chi tiết trang trí.

**Motion timeline theo scroll progress:**

- 0–15%: ảnh ở scale 1.03; nhãn chương xuất hiện.
- 15–35%: “Sáu năm.” xuất hiện, giữ trên màn hình đủ lâu để đọc.
- 35–60%: câu “Có một điều…” xuất hiện theo từng nhịp.
- 50–75%: ảnh zoom từ 1.03 lên khoảng 1.07; tiêu điểm vẫn là hai nhân vật.
- 70–90%: câu “Anh thương em, Bé Cam.” xuất hiện nổi bật.
- 90–100%: nội dung giảm nhẹ opacity để dẫn sang scene sau.

Không dùng hiệu ứng typewriter cho toàn bộ đoạn văn. Chỉ cho các dòng ngắn xuất hiện bằng fade/translate hoặc mask reveal.

### SCENE 02 — LITTLE MOMENTS

**Mục tiêu:** Đưa người xem từ câu chuyện 6 năm sang các khoảnh khắc thật của hai người.

**Ảnh sử dụng:**
- Photo 01 — selfie trước cửa cuốn.
- Photo 03 — selfie cận mặt.
- Photo 05 — phụ kiện đỏ.
- Photo 06 — tường nhiều ảnh.
- Photo 07 — selfie giơ tay chữ V.
- Photo 08 — selfie ngoài trời.

**Copy:**

Tiêu đề:

“Có những điều nhỏ bé, nhưng anh nhớ rất lâu.”

Các dòng ngắn lần lượt xuất hiện:

“Những lần bên cạnh nhau.”

“Những bức ảnh chẳng cần hoàn hảo.”

“Và những khoảnh khắc mà chỉ cần nhìn lại, anh đã thấy vui.”

Đây là câu chữ gợi ý. Không bắt buộc mỗi ảnh phải gắn với một tình tiết cụ thể chưa được xác nhận.

**Bố cục desktop:**
- Một vùng gallery bất đối xứng.
- Một ảnh chính có tỷ lệ lớn.
- Hai đến ba ảnh phụ phân bố ở các lớp chiều sâu.
- Không xếp 6 ảnh thành một grid đều nhau.
- Để lại khoảng trống lớn giữa ảnh và typography.

**Bố cục mobile:**
- Ưu tiên từng khoảnh khắc lần lượt chiếm spotlight.
- Không ép sáu ảnh nhỏ cùng xuất hiện trên một màn hình.
- Tạo cảm giác ảnh đi vào và ra khỏi khung hình.
- Chỉ duy trì tối đa 2–3 ảnh thực sự nổi bật cùng lúc.

**Motion timeline:**

- 0–15%: Photo 01 đi vào từ bên trái, opacity 0 → 1.
- 10–30%: Photo 03 xuất hiện từ phía sau, có scale nhỏ hơn.
- 25–45%: Photo 05 nổi lên làm trọng tâm, các ảnh còn lại giảm nhẹ độ sáng.
- 40–60%: Photo 06 dịch chuyển lên foreground.
- 55–75%: Photo 07 xuất hiện, nội dung chữ thay đổi.
- 70–90%: Photo 08 tạo cảm giác chiều sâu với nền xanh tự nhiên.
- 90–100%: gallery dịch chuyển khỏi trọng tâm, chuẩn bị cho ảnh film chính.

Các mốc này phải được triển khai như một chuỗi timeline liên tục hoặc các animation độc lập được đồng bộ bằng scroll. Không kích hoạt animation lặp lại gây nhấp nháy khi người dùng cuộn lên xuống.

### SCENE 03 — A MEMORY TO KEEP

**Mục tiêu:** Đưa nhịp kể chậm lại, chuyển từ vui tươi sang thân mật.

**Ảnh:** Photo 04 — ảnh photobooth có viền trắng.

**Copy:**

Tiêu đề:

“Có những khoảnh khắc, anh chỉ muốn giữ lại thật lâu.”

Dòng phụ:

“Không phải vì mọi thứ đều hoàn hảo, mà vì đó là những khoảnh khắc có ý nghĩa với anh.”

**Bố cục:**
- Một khung ảnh film nằm ở trung tâm.
- Hậu cảnh tối, có thể dùng một bản sao ảnh đã blur nhẹ, scale lớn làm nền.
- Ảnh chính giữ nét và có bóng đổ tự nhiên.
- Nền phụ không được làm cạnh tranh với khuôn mặt.
- Giữ nguyên viền trắng đặc trưng của ảnh photobooth.

**Motion timeline:**

- 0–20%: ảnh chính tiến từ scale 0.93 lên 1.
- 20–40%: rotate từ khoảng -2 độ về -0.4 độ.
- 35–60%: bóng đổ xuất hiện; hậu cảnh lùi nhẹ theo trục Y.
- 50–75%: tiêu đề hiện ở phía dưới hoặc bên cạnh tùy viewport.
- 75–100%: ảnh và chữ giữ ổn định, tạo khoảng lặng trước scene tỏ tình.

Không sử dụng rung lắc mạnh. Cảm giác mong muốn là một bức ảnh được đặt nhẹ lên mặt bàn, không phải một thẻ giao diện đang bay.

### SCENE 04 — WHAT I HAVE BEEN KEEPING

**Mục tiêu:** Bộc lộ sự chân thành trước khi đặt câu hỏi chính thức.

**Ảnh:** Photo 03 hoặc Photo 07.

Ưu tiên Photo 03 trên mobile vì khuôn mặt chiếm nhiều diện tích. Photo 07 phù hợp nếu cần một khung hình cân đối hơn.

**Copy:**

Tiêu đề:

“Có một điều anh không muốn chỉ giữ trong lòng nữa.”

Nội dung:

“Suốt thời gian qua, anh đã thương em quá nhiều.

Anh không muốn chỉ nói ra những lời đẹp đẽ trong một khoảnh khắc. Anh muốn nghiêm túc, có thể thương có thể ghen bằng một mối quan hệ rõ ràng, nếu em cũng cho phép điều đó.”

**Bố cục:**
- Màn hình tối dần.
- Ảnh chính thu nhỏ vừa đủ để vẫn nhìn rõ hai khuôn mặt.
- Nội dung được chia thành hai đoạn.
- Đoạn đầu xuất hiện trước.
- Đoạn sau xuất hiện sau khi người xem cuộn thêm.
- Tránh chạy các ảnh phụ ở cảnh này.

**Motion timeline:**

- 0–25%: hình ảnh dừng chuyển động mạnh, camera tiến rất nhẹ.
- 20–45%: câu đầu xuất hiện.
- 45–70%: câu tiếp theo xuất hiện, hậu cảnh giảm độ sáng.
- 70–90%: chuyển động giảm dần, chữ giữ nguyên.
- 90–100%: CTA dẫn tới câu hỏi chính thức.

Đây là cảnh chuẩn bị cảm xúc. Không nên đưa câu hỏi vào đầu scene vì sẽ làm giảm giá trị của cao trào kế tiếp.

### SCENE 05 — THE QUESTION

**Mục tiêu:** Đỉnh cảm xúc và tương tác quan trọng nhất.

**Ảnh:** Ưu tiên Photo 02 hoặc Photo 04 làm background với độ tối vừa đủ.

**Bố cục:**
- Tất cả ảnh phụ biến mất.
- Một ảnh nền duy nhất.
- Background tối hơn để chữ dễ đọc.
- Nội dung nằm trong vùng an toàn ở giữa màn hình.
- Không có carousel, progress card hoặc chi tiết trang trí cạnh tranh sự chú ý.

đoạn này sẽ do tôi đích thân tỏ tình với em.

hãy hiển thị các hình ảnh xoay tròn và khi 1 hình ảnh tới hướng 12h sẽ nảy lên và xoay 1 vòng rồi về lại vị trí. quá trình xoay không được ngắt quãng phải diễn ra liên tục vị trí từ khi hình ảnh đó nảy lên và đáp xuống không cùng trên 1 điểm

**Motion timeline:**

- 0–20%: background fade tối, typography phụ biến mất.
- 15–35%: các hình ảnh bắt đầu xoay tròn, với tốc độ vừa phải để người xem có thể nhìn được.
- 30–50%: các hình ảnh tiếp tục xoay tròn
- 45–65%: các hình ảnh tiếp tục xoay tròn
- 60–80%: các hình ảnh tiếp tục xoay tròn 
- 80–100%: các hình ảnh tiếp tục xoay tròn


### SCENE 06 — ONE LAST SURPRISE

**Mục tiêu:** Kết thúc bằng một trải nghiệm có thể mở rộng khi nội dung quà được quyết định.

**Trạng thái hiện tại:** Chưa xác định món quà cuối.

Không tự ý quyết định món quà thay người dùng. Hãy xây dựng một module độc lập có cấu hình, để thay ảnh, chữ hoặc tương tác sau này mà không cần viết lại toàn bộ scene.

**Giao diện mặc định:**

Tiêu đề:

“Anh còn chuẩn bị cho em một điều nhỏ nữa…”

Nút:

`Mở món quà cuối`

Khi nhấn:
- Thực hiện một chuyển động mở/reveal duy nhất.
- Có thể dùng một vùng sáng tập trung vào tâm.
- Nội dung quà được nạp từ cấu hình `finalGift`.
- Nếu chưa được cấu hình, hiển thị nội dung placeholder có thể thay thế, không giả vờ rằng quà đã được xác định.
- Không phụ thuộc vào việc cô ấy đã chọn đồng ý mới cho phép mở quà.

**Cấu trúc cấu hình đề xuất:**

```ts
export type FinalGiftConfig = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  message: string;
  image?: string;
  ctaLabel?: string;
  revealType: "letter" | "image" | "custom";
};

export const finalGift: FinalGiftConfig = {
  enabled: true,
  eyebrow: "ONE LAST THING",
  title: "Anh còn chuẩn bị cho em một điều nhỏ nữa…",
  message: "",
  image: undefined,
  ctaLabel: "Mở món quà cuối",
  revealType: "custom",
};
```

Khi có quyết định về món quà, chỉ thay cấu hình hoặc component nội dung tương ứng.

Sau khi mở, kết thúc bằng hình ảnh yên tĩnh và một lời nhắn ngắn. Không tự động quay về đầu trang.

---

## 5. MOTION SYSTEM — QUY TẮC TRIỂN KHAI

### Nguyên tắc chuyển động

Mỗi animation phải phục vụ một trong các mục tiêu:
- Tạo chiều sâu không gian.
- Dẫn sự chú ý đến chủ thể.
- Hé lộ nội dung theo nhịp kể chuyện.
- Chuyển cảm xúc từ scene trước sang scene sau.
- Phản hồi trực tiếp với thao tác người dùng.

Nếu một hiệu ứng không phục vụ các mục tiêu này, hãy loại bỏ.

### Kỹ thuật được ưu tiên

1. **Parallax:** ảnh tiền cảnh và hậu cảnh dịch chuyển khác tốc độ để tạo cảm giác chiều sâu.
2. **Image reveal:** dùng CSS mask hoặc clip-path để hé lộ ảnh.
3. **Depth stacking:** ảnh phụ nằm ở các lớp z-index khác nhau, có scale và độ sáng riêng.
4. **Cinematic zoom:** scale nhỏ trong một khoảng dài, không zoom giật.
5. **Typography reveal:** chữ xuất hiện theo từng khối nội dung ngắn.
6. **Cross-scene transition:** kết thúc scene trước bằng việc giảm trọng tâm rồi mở scene sau.

### Quy tắc chuyển động

- Ưu tiên `transform` và `opacity`.
- Dùng GSAP/ScrollTrigger cho các timeline được đồng bộ với cuộn.
- Không animate quá nhiều thành phần cùng lúc.
- Không blur toàn màn hình liên tục.
- Hạn chế các animation chạy vô hạn.
- Không dựa vào hover vì trải nghiệm chính là trên điện thoại.
- Không dùng scroll hijacking.
- Không dùng một animation dài khiến trang không phản hồi khi người dùng đổi hướng cuộn.
- Nếu scene có `pin`, chỉ pin vùng cần thiết và phải kiểm tra kỹ trên iOS Safari.
- Với scroll-driven scenes, sử dụng scrub hợp lý và tránh tạo quá nhiều trigger chồng lấn.

### Quy ước timeline

Mỗi scene có tiến trình chuẩn hóa từ `0` đến `1`.

Ví dụ:

```ts
type SceneProgress = number; // 0 -> 1

type MotionPreset = {
  imageScaleFrom: number;
  imageScaleTo: number;
  imageYFrom: number;
  imageYTo: number;
  titleYFrom: number;
  titleYTo: number;
  fadeInStart: number;
  fadeInEnd: number;
  fadeOutStart: number;
  fadeOutEnd: number;
};
```

Các giá trị là tham số thiết kế, không phải thông số bắt buộc cho tất cả scene. Từng scene phải có preset riêng.

### Reduced motion

Tôn trọng `prefers-reduced-motion: reduce`.

Khi được bật:
- Bỏ parallax nhiều lớp.
- Bỏ zoom dài theo cuộn.
- Dùng fade ngắn hoặc chuyển cảnh gần như tĩnh.
- Giữ đầy đủ nội dung, điều hướng và tương tác.
- Không làm nút “Bắt đầu” hoặc “Mở món quà” phụ thuộc vào animation để hoạt động.

---

## 6. KIẾN TRÚC FRONTEND

Nếu repository chưa có project, sử dụng:
- React.
- Vite.
- TypeScript.
- GSAP + ScrollTrigger.
- CSS Modules hoặc cấu trúc CSS rõ ràng.
- React hooks để quản lý trạng thái giao diện.

Không thêm thư viện animation thứ hai nếu không có lý do cụ thể. Không cài thêm nhiều dependency chỉ để thực hiện fade, transform hoặc responsive layout.

Nếu dự án đã có công nghệ phù hợp, ưu tiên mở rộng kiến trúc hiện hữu thay vì viết lại toàn bộ.

### Cấu trúc thư mục gợi ý

```text
src/
  app/
    App.tsx
    config.ts
  components/
    SceneShell.tsx
    SceneLabel.tsx
    CinematicImage.tsx
    FilmFrame.tsx
    ScrollCue.tsx
    ConfessionChoices.tsx
    FinalGift.tsx
  scenes/
    IntroScene.tsx
    SixYearsScene.tsx
    LittleMomentsScene.tsx
    MemoryScene.tsx
    HeartScene.tsx
    QuestionScene.tsx
    GiftScene.tsx
  hooks/
    useReducedMotion.ts
    useSceneNavigation.ts
  styles/
    tokens.css
    global.css
    scenes.css
  data/
    story.ts
    photos.ts
    finalGift.ts
  utils/
    preloadImages.ts
public/
  images/
```

Cấu trúc này là định hướng. Có thể điều chỉnh dựa trên repository thực tế nhưng phải giữ ranh giới rõ giữa dữ liệu nội dung, scene và hiệu ứng.

### Quản lý nội dung

Đưa nội dung có thể chỉnh sửa vào `src/data/story.ts` hoặc `src/app/config.ts`.

Không hardcode rải rác lời tỏ tình, tên gọi, nhãn scene hoặc CTA trong nhiều component.

Tách dữ liệu ảnh khỏi logic motion. Khi thay ảnh hoặc đổi thứ tự gallery, không cần sửa nhiều timeline.

### Quản lý lifecycle

- Đăng ký các GSAP timelines và ScrollTrigger trong lifecycle phù hợp.
- Clean up timeline/trigger khi component unmount.
- Không tạo trigger mới mỗi lần render.
- Hạn chế state React thay đổi liên tục theo từng frame animation.
- Dùng `gsap.context()` hoặc cơ chế cleanup thích hợp.
- Khi viewport thay đổi, đảm bảo timeline được refresh đúng.
- Khi ảnh tải xong, cập nhật layout/ScrollTrigger nếu cần.

---

## 7. CONTROLLED SCROLL VÀ ĐIỀU HƯỚNG

Dùng native browser scrolling làm mặc định.

Mỗi scene được chia thành một vùng nội dung có tỷ lệ chiều cao phù hợp. Scene giàu animation có thể dài hơn viewport để người xem khám phá từng giai đoạn chuyển động.

Nút điều hướng phải thực sự hoạt động:
- `Mình bắt đầu nhé` → cuộn tới Scene 01.
- `Tiếp tục` khi cần → cuộn tới scene kế tiếp.
- CTA mở quà → thực hiện reveal của Scene 06.
- Không tự động nhảy scene chỉ vì một animation kết thúc.
- Không tự động cuộn liên tục nếu người xem đang tương tác hoặc chủ động cuộn hướng khác.

Dùng `scroll-margin-top` hoặc tham số offset thích hợp để các tiêu đề không bị che.

Không khóa wheel, touchmove hoặc các thao tác cuộn của hệ điều hành.

Nếu có progress indicator, chỉ sử dụng một chỉ báo thanh mảnh hoặc nhãn chương. Không hiển thị sidebar điều hướng phức tạp trên mobile.

Trên mobile, bảo đảm các scene vẫn có thể đọc được khi:
- Địa chỉ trình duyệt co giãn.
- Bàn phím ảo xuất hiện trong tương tác.
- Màn hình đổi từ portrait sang landscape.
- Người xem phóng to trang hoặc tăng cỡ chữ.

---

## 8. RESPONSIVE DESIGN — ƯU TIÊN IPHONE 14 PRO MAX

Thiết kế mobile-first với chiều rộng CSS tham chiếu khoảng 430px cho iPhone 14 Pro Max ở chế độ dọc. Không hardcode giao diện cho duy nhất kích thước này.

### Mobile

- Phần hero phải chiếm trọn vùng nhìn, có xét đến safe area.
- Sử dụng `100svh`, `100dvh` hoặc fallback phù hợp thay cho việc phụ thuộc hoàn toàn vào `100vh`.
- Dùng `env(safe-area-inset-top)` và `env(safe-area-inset-bottom)` khi cần.
- Nội dung không nằm sát mép màn hình.
- Typography chính không tràn ngang.
- Nút bấm có vùng tương tác dễ chạm.
- Không để nội dung quan trọng bị cắt bởi `overflow: hidden`.
- Không dùng nhiều ảnh chồng nhau tới mức khó phân biệt chủ thể.

### Tablet/Desktop

- Có thể chuyển từ collage dọc sang bố cục gallery bất đối xứng.
- Tăng khoảng trống và quy mô hình ảnh.
- Không kéo typography và ảnh lớn vô hạn theo chiều rộng màn hình.
- Giữ cùng nội dung và thứ tự cảm xúc.
- Không tạo một phiên bản desktop hoàn toàn khác về câu chuyện.

### Aspect ratio và crop

Tạo cấu hình crop cho từng ảnh, ví dụ:

```ts
type PhotoAsset = {
  src: string;
  alt: string;
  objectPosition: string;
  aspectMobile: string;
  aspectDesktop: string;
};
```

Kiểm tra bằng ảnh thật. Không chọn `object-position: center` mặc định cho mọi ảnh nếu làm mất gương mặt.

---

## 9. HIỆU NĂNG VÀ MEDIA

Website chủ yếu dựa trên ảnh nên việc tối ưu media là yêu cầu quan trọng.

### Quy tắc bắt buộc

- Dùng WebP hoặc AVIF nếu chất lượng phù hợp.
- Giữ tỷ lệ khung hình để tránh layout shift.
- Dùng `width`/`height` hoặc `aspect-ratio`.
- Ảnh hero có thể preload hoặc được ưu tiên tải.
- Các ảnh ở scene phía dưới phải lazy-load khi phù hợp.
- Không preload cả 8 ảnh chất lượng cao nếu chưa cần.
- Dùng `srcset`/`sizes` hoặc giải pháp ảnh responsive phù hợp.
- Giới hạn kích thước ảnh hiển thị và độ phân giải theo nhu cầu thực tế.
- Không dùng ảnh base64 lớn nhúng trực tiếp trong component.
- Dọn listener, observer và animation khi không còn sử dụng.

### Hiệu ứng nặng

Không dùng WebGL hoặc Three.js chỉ để tạo parallax cơ bản.

Không duy trì filter blur lớn trên ảnh full-screen nếu có thể tạo hiệu ứng tương tự bằng overlay hoặc ảnh nền đã xử lý.

Nếu tách chủ thể khỏi nền bằng mask, kiểm tra lỗi quanh tóc và vai. Nếu chất lượng không đạt, quay lại phương án pan/zoom ảnh nguyên bản.

### Âm thanh

Âm thanh tùy chọn. Nếu bổ sung nhạc:
- Không tự phát có tiếng khi mở trang.
- Chỉ bắt đầu sau thao tác chủ động của người xem.
- Có nút bật/tắt dễ tìm nhưng không chiếm quá nhiều diện tích.
- Nội dung website phải hoàn chỉnh ngay cả khi âm thanh không hoạt động.
- Không thêm file nhạc có bản quyền không rõ quyền sử dụng.

---

## 10. ACCESSIBILITY VÀ TÍNH TIN CẬY

- Dùng heading theo thứ bậc hợp lý.
- Ảnh trang trí có alt rỗng; ảnh mang nội dung có alt mô tả.
- Nút phải có tên rõ ràng.
- Hỗ trợ keyboard focus trên desktop.
- Giữ độ tương phản văn bản tốt trên nền ảnh.
- Không để nội dung quan trọng chỉ xuất hiện khi hover.
- Hỗ trợ `prefers-reduced-motion`.
- Không dùng hiệu ứng nhấp nháy mạnh.
- Không cản trở thao tác quay lại, cuộn lên hoặc đóng trang.
- Không gửi câu trả lời của Bé Cam đến server trong phiên bản ban đầu.
- Không thêm analytics hoặc thu thập dữ liệu người xem nếu không cần thiết.

---

## 11. CHECKLIST NGHIỆM THU

Coding agent phải tự triển khai, chạy và kiểm tra website. Không chỉ tạo cấu trúc component hoặc bản mockup tĩnh.

### Visual quality

- [ ] Giao diện có phong cách cinematic nhất quán.
- [ ] Ảnh thật là thành phần trung tâm.
- [ ] Mỗi scene chỉ có một điểm nhấn thị giác chính.
- [ ] Không có những mảng chữ dài chiếm toàn màn hình.
- [ ] Không có nhiều hiệu ứng cạnh tranh cùng lúc.
- [ ] Crop không cắt mất khuôn mặt hoặc chi tiết quan trọng.
- [ ] Chữ tiếng Việt không lỗi font hoặc dấu.
- [ ] Scene tỏ tình thực sự yên tĩnh và nổi bật hơn các scene trước.

### Motion quality

- [ ] Intro có chuyển động có chủ đích.
- [ ] Gallery có chiều sâu, không đơn thuần fade-in.
- [ ] Motion được liên kết hợp lý với scroll progress.
- [ ] Chuyển cảnh không giật hoặc mất vị trí cuộn.
- [ ] Không tạo trigger trùng lặp.
- [ ] Người xem có thể cuộn ngược.
- [ ] CTA cuộn tới đúng scene.
- [ ] Reduced motion hoạt động đúng.

### Interaction quality

- [ ] Cả hai lựa chọn trả lời đều có thể bấm dễ dàng.
- [ ] Mỗi lựa chọn dẫn đến phản hồi chính xác.
- [ ] Không thao túng lựa chọn bằng cách làm nút từ chối né tránh.
- [ ] Quà cuối có thể mở từ giao diện.
- [ ] Nội dung quà là module cấu hình độc lập.
- [ ] Không có nút trang trí không hoạt động.
- [ ] Không có dữ liệu trả lời bị gửi đi ngoài ý muốn.

### Performance and responsive

- [ ] Không có lỗi console nghiêm trọng.
- [ ] Không có ảnh bị vỡ hoặc đường dẫn asset sai.
- [ ] Không có nội dung tràn ngang trên mobile.
- [ ] Không bị layout shift nghiêm trọng khi ảnh tải.
- [ ] Hiệu ứng cuộn ổn định trên Safari iOS.
- [ ] Không tạo animation nặng liên tục khi tab ở nền.
- [ ] Các scene vẫn đọc được khi thay đổi kích thước viewport.

### Final delivery

Khi hoàn thành, báo cáo:
1. Cấu trúc đã triển khai.
2. Các scene và animation đã hoàn thành.
3. Những nội dung còn dùng placeholder.
4. Các bài kiểm tra thực tế đã chạy.
5. Các lỗi chưa giải quyết nếu có.

Không tuyên bố đã kiểm thử trên iPhone thật nếu chỉ mới dùng responsive simulator.

---

## 12. THỨ TỰ THỰC HIỆN ĐỀ XUẤT

### Phase 1 — Foundation

- Kiểm tra repository.
- Tạo nền tảng responsive.
- Chuẩn hóa asset và crop.
- Thiết lập design tokens.
- Hoàn thiện các component dùng chung.

### Phase 2 — Storytelling

- Xây dựng lần lượt 7 scene.
- Tích hợp nội dung tiếng Việt.
- Kiểm tra thứ tự và nhịp cảm xúc.
- Đảm bảo có thể đi xuôi và ngược trong câu chuyện.

### Phase 3 — Motion design

- Thêm timeline và parallax.
- Đồng bộ scroll progress.
- Tạo image reveal và depth stacking.
- Hoàn thiện transition giữa các scene.
- Bổ sung reduced-motion fallback.

### Phase 4 — Interaction

- Xử lý hai lựa chọn tỏ tình.
- Hoàn thiện trạng thái phản hồi.
- Xây dựng module quà cuối có cấu hình.

### Phase 5 — Evaluate and refine

Chụp và kiểm tra các trạng thái:
- Hero khi vừa mở trang.
- Gallery ở giữa tiến trình.
- Scene photobooth.
- Cảnh lời nhắn.
- Câu hỏi tỏ tình.
- Cả hai trạng thái phản hồi.
- Trạng thái mở quà.

Sau mỗi vòng đánh giá, ưu tiên sửa:
1. Sai crop hoặc ảnh khó nhìn.
2. Chữ quá nhiều hoặc phân cấp yếu.
3. Chuyển động quá dày.
4. Cuộn bị mất kiểm soát.
5. Khoảng cách, căn chỉnh và responsive.
6. Các chi tiết trang trí nhỏ.

Chỉ hoàn thành khi chất lượng thị giác, motion, nội dung và interaction cùng đạt yêu cầu. Không dùng việc “đã chạy được” làm tiêu chuẩn hoàn tất duy nhất.

## FINAL DIRECTIVE

Hãy xây dựng một câu chuyện tình cảm chân thật, tập trung vào 6 năm thương Bé Cam và khoảnh khắc anh quyết định nói ra điều đó.

Đừng cố chứng minh website có bao nhiêu hiệu ứng. Hãy khiến mỗi chuyển động có lý do, mỗi bức ảnh có vai trò và câu hỏi cuối cùng có đủ khoảng lặng để người xem cảm nhận.

Cao trào phải là lời tỏ tình, không phải hiệu ứng animation.

Giữ nguyên tính chân thật của ảnh gốc. Giữ quyền lựa chọn của Bé Cam. Không tự quyết định nội dung món quà cuối.

Triển khai code thực tế, chạy thử, tự đánh giá, sửa các điểm yếu và báo cáo kết quả cuối cùng.