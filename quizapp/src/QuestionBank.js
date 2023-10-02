const questionBank = [
    // {
    //     question: 'What is the capital of France?',
    //     choices: ['Madrid', 'Berlin' , 'Paris' , 'Rome' ] ,
    //     answer: 'Paris'
    // } , 
    // {
    //     question: 'Who wrote the play "Romeo and Juliet"?',
    //     choices: ['Charles Dickens', 'William Shakespeare' , 'Jane Austen' , 'Mark Twain' ] ,
    //     answer: 'William Shakespeare'
    // } ,
    // {   
    //     question: 'What is the chemical symbol for the element gold?',
    //     choices: ['Go', 'Gd' , 'Au' , 'Ag' ] ,
    //     answer: 'Au'
    // } ,
    // {   
    //     question: 'Which planet is known as the "Red Planet"?',
    //     choices: ['Mars', 'Venus' , 'Jupiter' , 'Saturn' ] ,
    //     answer: 'Mars'
    // } ,
    // {
    //     question: "What is the largest mammal in the world?",
    //     choices: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    //     answer: "Blue Whale"
    // },
    // {
    //     question: "Which country is known as the Land of the Rising Sun?",
    //     choices: ["China", "Japan", "South Korea", "Thailand"],
    //     answer: "Japan"
    // },
    // {
    //     question: "What is the tallest mountain in the world?",
    //     choices: ["Kilimanjaro", "K2", "Mount Everest", "Matterhorn"],
    //     answer: "Mount Everest"
    // },
    // {
    //     question: "Which gas makes up the majority of Earth's atmosphere?",
    //     choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    //     answer: "Nitrogen"
    // },
    // {
    //     question: "Who is the author of the Harry Potter book series?",
    //     choices: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"],
    //     answer: "J.K. Rowling"
    // },
    // {
    //     question: "Which famous scientist is known for his theory of relativity (E=mc^2)?",
    //     choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    //     answer: "Albert Einstein"
    // },
    {
        question: "Tổng giám đốc CTCK phải đáp ứng tiêu chuẩn" ,
        choices: ["Có chứng chỉ hành nghề môi giới chứng khoán" ,
                  "Có chứng chỉ hành nghề môi giới chứng khoán hoặc phân tích tài chính" , 
                  "Có chứng chỉ hành nghề môi giới chứng khoán hoặc quản lý quỹ" ,
                  "Có chứng chỉ hành nghề phân tích tài chính hoặc quản lý quỹ"
                ] , 
        answer: "Có chứng chỉ hành nghề phân tích tài chính hoặc quản lý quỹ"
    } ,
    {
        question: "Công ty chứng khoán nước ngoài và công ty quản lý quỹ nước ngoài được lập bao nhiêu chi nhánh ở VN" ,
        choices: ["1" , "2", "3" , "4"],
        answer: "1"
    } ,
    {
        question: "Nhà đầu tư nước ngoài là cá nhân và người có liên quan được sở hữu tối đa bao nhiêu % vốn của CTCK, công ty quản lý quỹ đầu tư CK" ,
        choices: ["10%" , "15%" , "49%", "100%"] ,
        answer: "49%"
    }, 
    {
        question: "Phạm vi hoạt động của VP đại diện CTCK, cty quản lý quỹ nước ngoài tại VN KHÔNG bao gồm nội dung nào" ,
        choices: [
            "Thực hiện chức năng văn phòng liên lạc & nghiên cứu thị trường", 
            "Xúc tiến xây dựng các dự án hợp tác trong lĩnh vực CK & TTCK tại VN" ,
            "Thúc đẩy, giám sát thực hiện dự án do công ty CK, công ty quản lý quỹ nước ngoài tài trợ tại VN", 
            "Thực hiện hoạt động kinh doanh CK tại VN"
        ],
        answer: "Thực hiện hoạt động kinh doanh CK tại VN"
    },
    {
        question: "Chi nhánh CTCK nước ngoài tại VN chỉ được thực hiện nghiệp vụ nào" ,
        choices: [
            "Môi giới chứng khoán" ,
            "Tự doanh chứng khoán" ,
            "Bảo lãnh phát hành CK" ,
            "Tư vấn đầu tư CK"
        ],
        answer: "Tư vấn đầu tư CK"
    } , 
    {
        question: "Một trong những điều kiện để CTCK được chào bán sản phẩm tài chính là" ,
        choices: [
            "Có VĐL và VCSH đạt tối thiếu 100 tỷ VND theo BCTC gần nhất kiểm toán" , 
            "Có VĐL và VCSH đạt tối thiếu 500 tỷ VND theo BCTC gần nhất kiểm toán" ,
            "Có VĐL và VCSH đạt tối thiếu 800 tỷ VND theo BCTC gần nhất kiểm toán" ,
            "Có VĐL và VCSH đạt tối thiếu 1000 tỷ VND theo BCTC gần nhất kiểm toán"
        ],
        answer: "Có VĐL và VCSH đạt tối thiếu 1000 tỷ VND theo BCTC gần nhất kiểm toán"
    } ,
    {
        question: "Một trong những điều kiện để CTCK cung cấp dịch vụ cho vay CK là" ,
        choices: [
            "Tỷ lệ vốn khả dụng đạt 180% liên tục trong 06 tháng gần nhất" , 
            "Tỷ lệ vốn khả dụng đạt 220% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 240% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 280% liên tục trong 06 tháng gần nhất"
        ],
        answer: "Tỷ lệ vốn khả dụng đạt 220% liên tục trong 06 tháng gần nhất"
    } ,
    {
        question: "Một trong những điều kiện để CTCK cung cấp dịch vụ KH vay tiền mua CK để giao dịch ký quỹ là" ,
        choices: [
            "Tỷ lệ vốn khả dụng đạt 180% liên tục trong 06 tháng gần nhất" , 
            "Tỷ lệ vốn khả dụng đạt 220% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 240% liên tục trong 06 tháng gần nhất" ,
            "Tỷ lệ vốn khả dụng đạt 280% liên tục trong 06 tháng gần nhất"
        ] ,
        answer: "Tỷ lệ vốn khả dụng đạt 180% liên tục trong 06 tháng gần nhất"
    },
    {
        question: "Điều kiện, hồ sơ, thủ tục cấp CCHN CK được quy định tại" ,
        choices: [
            "Thông tư số 196/2015/TT-BTC" ,
            "Thông tư số 210/2012/TT-BTC" ,
            "Nghị định số 58/2012/NĐ-CP" ,
            "Nghị định số 155/2020/NĐ-CP"
        ],
        answer: "Nghị định số 155/2020/NĐ-CP"
    } , 
    {
        question: "Tỷ lệ tổng nợ trên VCSH CTCK không được vượt quá",
        choices: [
            "2 lần" , "3 lần", "4 lần", "5 lần"
        ],
        answer: "5 lần"
    },
    {
        question: "Tổng giá trị đầu tư vào TPDN của CTCK không được vượt quá" ,
        choices: [
            "30% VCSH",
            "45% VCSH",
            "50% VCSH",
            "70% VCSH"
        ] ,
        answer: "70% VCSH"
    },
    {
        question: "CTCK không được đầu tư vào cổ phiếu, góp vốn vượt quá" ,
        choices: [
            "30% VCSH",
            "45% VCSH",
            "50% VCSH",
            "70% VCSH"
        ] ,
        answer: "70% VCSH"
    },
    {
        question: "CTCK phải tổ chức họp ĐHCĐ thường niên trong bao lâu kể từ khi kết thúc năm tài chính" ,
        choices: [
            "3 tháng", "4 tháng", "5 tháng", "6 tháng"
        ],
        answer: "6 tháng"
    } ,
    {
        question: "Rủi ro hoạt động của tổ chức kinh doanh chứng khoán được xác định là giá trị lớn nhất của các giá trị sau" ,
        choices: [
            "25% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 20% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
            "20% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 25% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
            "25% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 25% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
            "20% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 20% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật" ,
        ],
        answer: "25% chi phí duy trì hoạt động của tổ chức kinh doanh chứng khoán trong vòng 12 tháng liền kể, 20% VĐL tổi thiểu cho các nghiệp vụ kinh doanh của tổ chức kinh doanh CK theo quy định pháp luật"
    }, 
    {
        question: "Trong trường hợp tỷ lệ vốn khả dụng từ 150% đến dưới 180%, UBCKNN sẽ đưa CTCK vào diện",
        choices: [
            "cảnh báo", "kiểm soát", "kiểm soát đặc biệt", "đình chỉ hoạt động"
        ],
        answer: "cảnh báo"
    }, 
    {
        question: "Trường hợp nào sau đây phải làm thủ tục giảm vốn điều lệ tương ứng với giá trị tính theo mệnh giá được mua lại" ,
        choices: [
            "Mua lại CP của người lao động theo quy chế phát hành cho người lao động", 
            "Mua lại cổ phiếu lẻ theo phương án phát hành cổ phiếu để trả cổ tức, phát hành cổ phiếu từ nguồn VCSH",
            "Mua lại CP theo yêu cầu của cổ đông", 
            "CTCK mua lại cổ phiếu của chính mình để sửa lỗi giao dịch hoặc mua lại CP lô lẻ"
        ],
        answer: "Mua lại CP theo yêu cầu của cổ đông"
    }, 
    {
        question: "Theo Luật CK 2019, Tổng công ty lưu ký và bù trừ CKVN KHÔNG được" ,
        choices: [
            "Quản lý tách biệt tài sản của các quỹ hỗ trợ thanh toán, quỹ bù trừ, quỹ phòng ngừa rủi ro nghiệp vụ", 
            "Chấp thuận, huỷ bỏ tư cách thành viên của Tổng công ty lưu ký và bù trừ CKVN" ,
            "Đảm bảo cơ sở vật chất, kỹ thuật phục vụ các hoạt động đăng ký, lưu ký, bù trừ, thanh toán" , 
            "giám sát hoạt động đăng ký, lưu ký, bù trừ, thanh toán giao dịch chứng khoán"
        ],
        answer: "Chấp thuận, huỷ bỏ tư cách thành viên của Tổng công ty lưu ký và bù trừ CKVN"
    }, 
    {
        question: "Những loạt CK nào sau đây phải được niêm yết, đăng ký giao dịch trên hệ thống giao dịch CK \nI. CK đã chào bán ra công chúng, cổ phiếu của công ty đại chúng \nII. Chứng chỉ quỹ đóng, chứng chỉ quỹ hoán đổi danh mục \nIII. Công cụ nợ của chính phủ, trái phiếu được chính phủ bảo lãnh và trái phiếu chính quyền địa phương  \nIV.Chứng quyền có bảo đảm, hợp đồng tương lai, hợp đồng quyền chọn do UBCKNN chấp thuận" ,
        choices: [ 
            "I, II và III", "I, III và IV", "I, II và IV", "I, II, III và IV"
        ],
        answer: "I, II và IV"
    },
    {
        question: "Chứng khoán bị huỷ đăng ký giao dịch trong các trường hợp sau, ngoại trừ" ,
        choices: [
            "Tổ chức đăng ký giao dịch huỷ tư cách công ty đại chúng theo thông báo của UBCKNN" ,
            "Tổ chức đăng ký giao dịch bị thu hồi giấy đăng ký doanh nghiệp, giấy phép thành lập và hoạt động hoặc giấy tờ pháp lý có giá trị tương đương",
            "Tổ chức đăng ký giao dịch được chấp thuận niêm yết tại sở giao dịch chứng khoán",
            "DN cổ phần hoá sau 2 năm kể từ ngày giao dịch đầu tiên vẫn chưa đáp ứng đủ điều kiện là công ty đại chúng theo quy định tại điểm a khoản 1 điều 32 Luật CK và chưa được UBCKNN xác nhận hoàn tất đăng ký công ty đại chúng"
        ] ,
        answer: 
        "DN cổ phần hoá sau 2 năm kể từ ngày giao dịch đầu tiên vẫn chưa đáp ứng đủ điều kiện là công ty đại chúng theo quy định tại điểm a khoản 1 điều 32 Luật CK và chưa được UBCKNN xác nhận hoàn tất đăng ký công ty đại chúng" , 
    }, 
    {
        question: "Khi chứng khoán đã đăng ký biện pháp bảo đảm bị huỷ đăng ký tập trung theo quy định pháp luật, Tổng công ty lưu ký và bù trừ chứng khoán VN thông báo cho" ,
        choices: [
            "Sở giao dịch chứng khoán nơi chứng khoán dùng làm tài sản bảo đảm niêm yết/ đăng ký giao dịch",
            "Thành viên lưu ký nơi lưu ký chứng khoán dùng làm tài sản đảm bảo để thông báo cho các bên làm thủ tục xoá đăng ký biện pháp bảo đảm",
            "Thành viên lưu ý về việc Tổng công ty lưu ý và bù trừ chứng khoán VN tự động thực hiện xoá biện pháp bảo đảm",
            "Các bên đăng ký biện pháp bao đảm"
        ],
        answer: "Thành viên lưu ký nơi lưu ký chứng khoán dùng làm tài sản đảm bảo để thông báo cho các bên làm thủ tục xoá đăng ký biện pháp bảo đảm"
    },
    {
        question: "Những thông tin nào sau đây về chứng khoán đăng ký biện pháp bảo đảm do Tổng công ty lưu ký và bù trừ chứng khoán cung cấp \n I. Bên bảo đảm và bên nhận bảo đảm \n II. Mã chứng khoán, số lượng CK đăng ký biện pháp bảo đảm \n III. Thông tin về việc xử lý tài sản bảo đảm \n IV. Thời điểm đăng ký biện pháp bảo đảm", 
        choices: [
            "I, II và III" , 'II, III, IV', 'II, III', 'I,II,IV',
        ],
        answer: 'I,II,IV'

    },
    {
        question: "Người sở hữu CK đã lưu ký nhận quyền, lợi ích được phân bổ thông qua" ,
        choices: [
            "Sở giao dịch CK", "Tổ chức phát hành, công ty đại chúng", 
            "Tổng công ty lưu ký và bù trừ CKVN & các thành viên lưu ký nơi người sử hữu CK mở tài khoản lưu ký CK " ,
            "Tổng công ty lưu ký và bù trừ CKVN"
        ],
        answer: "Tổng công ty lưu ký và bù trừ CKVN & các thành viên lưu ký nơi người sử hữu CK mở tài khoản lưu ký CK "
    },
    {
        question: "Câu nào sau đây miêu tả đầy đủ, chính xác về nguyên tắc lưu ký chứng khoán",
        choices: [
            "Khách hàng lưu ký CK tại thành viên lưu ký", 
            "Khách hàng lưu ký CK tại thành viên lưu ký & thành viên tái lưu ký CK của KH tại Tổng công ty lưu ký CK VN" , 
            "Khách hàng lưu ký trực tiếp tại Tổng công ty lưu ký CK VN", 
            "Khách hàng lưu ký CK qua công ty phát hành"
        ],
        answer: "Khách hàng lưu ký CK tại thành viên lưu ký & thành viên tái lưu ký CK của KH tại Tổng công ty lưu ký CK VN"
    }, 
    {
        question: "Thành viên lưu ký là CTCK đã chấm dứt tư cách thành viên tại sở giao dịch CKVN được phép",
        choices: [
            "Mở tài khoản lưu ký CK tại 1 ngân hàng duy nhất khác để tất toán các tài khoản lưu ký cho CK của khách hàng", 
            "Mở tài khoản lưu ký CK tại 1 công ty CK khác để giao dịch chứng khoán của chính mình", 
            "Mở tài khoản lưu ký CK tại các thành viên lưu ký khác để xử lý số chứng khoán còn lại trên tài khoản tự doanh",
            "Mở tài khoản giao dịch CK tại các CTCK khác để xử lý số chứng khoán còn lại trên tài khoản tự doanh"
        ],
        answer: "Mở tài khoản lưu ký CK tại các thành viên lưu ký khác để xử lý số chứng khoán còn lại trên tài khoản tự doanh"
    },
    {
        question: "Miêu tả nào sau đây chính xác nhất về giao dịch bán khống tài sản có đảm bảo", 
        choices: [
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK mà NĐT đã mua trên hệ thống GDCK tại các ngày giao dịch trước đó và đang trong quá trình hoàn tất chuyển quyền sở hữu",
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK đã được vay trên hệ thống vay và cho vay CK của Tổng công ty lưu ký và bù trừ CKVN. Người bán sau đó có nghĩa vụ mua lại số CK đã để hoàn trả khoản đã vay",
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK khi NĐT không sở hữu CK đó và sử dụng các tài sản hiện có để làm tài sản đảm bảo", 
            "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK khi NĐT không sở hữu CK tại thời điểm bán nhưng tại ngày thanh toán đã có đủ số chứng khoán để chuyển giao cho bên mua dựa trên hợp đồng thoả thuận với bên mua"
        ],
        answer: "giao dịch bán khống tài sản có đảm bảo là giao dịch bán CK đã được vay trên hệ thống vay và cho vay CK của Tổng công ty lưu ký và bù trừ CKVN. Người bán sau đó có nghĩa vụ mua lại số CK đã để hoàn trả khoản đã vay"
    }, 
    {
        question: "Chi nhánh công ty quản lý quỹ nước ngoài tại VN được mở", 
        choices: [
            "01 tài khoản lưu ký chứng khoán duy nhất tại 1 thành viên lưu ký duy nhất", 
            "02 tài khoản lưu ký chứng khoán trong đó 01 tài khoản lưu ký CK tại ngân hàng lưu ký và 01 tài khoản tại CTCK",
            "02 tài khoản lưu ký chứng khoán tại thành viên lưu ký trong đó 01 tài khoản lưu ký cho chính mình và 01 tài khoản lưu ký CK để quản lý danh mục CK cho NĐT nước ngoài", 
            "02 tài khoản lưu ký chứng khoán tại 01 thành viên duy nhất"
        ],
        answer: "02 tài khoản lưu ký chứng khoán tại thành viên lưu ký trong đó 01 tài khoản lưu ký cho chính mình và 01 tài khoản lưu ký CK để quản lý danh mục CK cho NĐT nước ngoài"
    },
    {
        question: "Tài khoản ký quỹ bù trừ của NĐT không được sử dụng cho hoạt động nào",
        choices: [
            "Nhận và hoàn trả tài sản ký quỹ cho thành viên bù trừ", 
            "Nhận hoặc thanh toán tiền giao dịch CK của NĐT, nhận thanh toán lãi tiền gửi ngân hàng theo mức lãi suất thoả thuận giữa thành viên bù trừ và ngân hàng quản lý tài khoản", 
            "Nhận hoặc chuyển giao chứng khoán vào ngày thanh toán",
            "Nhận quyền lợi và lợi ích phát sinh đối với CK trên tài khoản ký quỹ bù trừ"
        ],
        answer: "Nhận và hoàn trả tài sản ký quỹ cho thành viên bù trừ"
    }, 
    {
        question: "Chứng khoán được Tổng công ty lưu ký bù trừ CKVN chấp thuận là tài sản ký quỹ bù trừ cho các giao dịch chứng khoán cơ sở phải đáp ứng điều kiện nào", 
        choices: [
            "Thuộc nhóm VN30" , 
            "Là CK đang được sử dụng làm tài sản đảm bảo trong các giao dịch theo quy định pháp luật dân sự về giao dịch tài sản bảo đảm", 
            "Không bị phong toả, tạm giữ tại Tổng công ty lưu ký bù trừ CKVN",
            "Là CK có thanh khoản cao, giao dịch lớn"
        ],
        answer: "Không bị phong toả, tạm giữ tại Tổng công ty lưu ký bù trừ CKVN"
    },
    {
        question: "Trường hợp thiếu CK do sửa lỗi giao dịch hoặc xử lý lỗi tự doanh, thành viên bù trừ được áp dụng các biện pháp hỗ trợ sau, ngoại trừ",
        choices: [
            "Sử dụng CK vay qua hệ thống vay và cho vay do Tổng công ty lưu ký bù trừ CKVN quản lý", 
            "Trường hợp đến thời điểm thanh toán theo quy định, thành viên bù trừ vẫn không đủ CK để thanh toán, Tổng công ty lưu ký bù trừ CKVN sẽ thực hiện huỷ thanh toán đối với số CK thiếu cuả thành viên bù trừ",
            "Mua bắt buộc qua hệ thống giao dịch CK", 
            "Thanh toán bằng tiền nếu CK thiếu không được vay và mua bắt buộc theo quy định của Tổng công ty lưu ký bù trừ CKVN và Sở GDCKVN", 
        ],
        answer: "Trường hợp đến thời điểm thanh toán theo quy định, thành viên bù trừ vẫn không đủ CK để thanh toán, Tổng công ty lưu ký bù trừ CKVN sẽ thực hiện huỷ thanh toán đối với số CK thiếu cuả thành viên bù trừ"
    },
    {
        question: "Hệ thống vay và cho vay CK được thực hiện theo nguyên tắc nào",
        choices: 
        [
            "Hệ thống vay và cho vay CK được thực hiện theo cơ chế khớp lệnh giữa bên vay và bên cho vay trên nguyên tắc ưu tiên về thời gian",
            "Tài sản bảo đảm bắt buộc là chứng khoán niêm yết trên Sở giao dịch CK",
            "Lãi suất cho vay được thoả thuận trên nguyên tắc tuân thủ pháp luật",
            "Khoản vay phải được hoàn trả duy nhất bằng tiền sau khi được bên cho vay chấp thuận"
        ],
        answer: "Lãi suất cho vay được thoả thuận trên nguyên tắc tuân thủ pháp luật"
    },
    // 31 - 90
    {
        question: 'Công ty đại chúng được mua lại CP của chính mình không phải đáp ứng quy định nào \n I. Mua lại không quá 30% tổng số cổ phần phổ thông đã bán \nII.Phải thực hiện mua lại CP trong thời hạn 6 tháng, kể từ ngày kết thúc đợt chào bán cổ phiếu để tăng vốn \nIII. Có quyết định mua lại CP để giảm vốn điều lệ được DHCD thông qua\nIV.Có CTCK được chỉ định thực hiện giao dịch',
        choices: [
            'I, IV', 'II', 'II,IV', 'Tất cả các phương án trên'
        ],
        answer: 'II'
    },
    {
        question:'Các hình thức xử phạt trong xử lý vi phạm hành chính trong lĩnh vực CK bao gồm \nI. Cảnh cáo \nII. Tước quyền sử dụng GCN đăng ký hoạt động văn phòng dại diện, chứng chỉ hành nghề CK từ 03 - 24 tháng \nIII.Tịch thu tang vật vi phạm hành chính, phương tiện được sử dụng để vi phạm hành chính \nĐình chỉ giao dịch chứng khoán có thời hạn từ 01 - 12 tháng',
        choices: [
            'I',
            'I, II',
            'I, II, IV',
            'Tất cả các phương án trên'
        ],
        answer: 'I, II, IV'
    }, 
    {
        question: 'Điều kiện nào sau đây là điều kiện niêm yết trái phiếu trên Sở GDCK \nI. Có VĐL đã góp từ 10 tỷ trở lên \nII. Được HĐQT thông qua việc niêm yết \nIII. ROE năm liền trước năm đăng ký tối thiếu 15% \nIV.Phải là trái phiếu đã chào bán ra công chúng',
        choices: [
            'I, II', 'III, IV', 'I, II, III', 'IV'
        ],
        answer: 'IV'
    }, 
    {
        question: 'Điều kiện về vốn, vốn chủ sở hữu đối với công ty chứng khoán thực hiện tự doanh chứng khoán phái sinh tối thiếu là',
        choices: [
            '500 tỷ',
            '600 tỷ',
            '800 tỷ',
            '900 tỷ'
        ],
        answer: '600 tỷ'
    }, 
    {
        question: 'Điều kiện là thành viên bù trử chung cho hoạt động thanh toán, bù trừ giao dịch chứng khoán phái sinh của CTCK \nI. Là thành viên lưu ký của Tổng công ty lưu ký bù trừ chứng khoán VN \nII. Vốn điều lệ, VCSH từ 1200 tỷ VND \nIII. Vốn điều lệ, VCSH từ 5000 tỷ VND \nIV.Không lỗ 2 năm gần nhất',
        choices: [
            'I, II, IV', 'II, IV', 'I, III, IV', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, IV'
    },
    {
        question: 'Theo quy định của Luật Chứng khoán, Sở giao dịch CK không có quyền nào sau đây, loại trừ \n I. Ban hành quy chế đăng ký, lưu ký, bù trừ, thanh toán CK sau khi được UBCK chấp thuật \nII. Tạm ngừng đình chỉ hoặc huỷ bỏ giao dịch chứng khoán \nIII.Cháp thuật, huỷ bỏ niêm yết CK tại SGDCK \nIV. Làm trung gian hoà giải theo yêu cầu của thành viên giao dịch khi phát sinh tranh chấp liên quan đến giao dịch CK',
        choices: [
            'I', 'I, IV', 'II, III', 'III, IV'
        ],
        answer: 'I'
    },
    {
        question: 'Khi xử lý vi phạm hành chính trong lĩnh vực CK, Chủ tich UBCK được phạt tối đa',
        choices: [
            'Đến 100 triệu với tổ chức, 50 triệu với cá nhân',
            'Đến 500 triệu với tổ chức, 250 triệu với cá nhân',
            'Đến 2 tỷ với tổ chức, 1 tỷ với cá nhân',
            'Đến 3 tỷ với tổ chức, 1.5 tỷ với cá nhân'
        ],
        answer: 'Đến 3 tỷ với tổ chức, 1.5 tỷ với cá nhân'
    },
    {
        question: 'Đối tượng nào được phạt vi phạm hành chính trong lĩnh vực CK \nI. Bộ trưởng Bộ tài chính \nII. Chủ tịch UBCK \nIII. Chánh thanh tra UBCK \nIV. Chủ tịch UBND cấp tỉnh',
        choices: [
            'I, II, III', 'II, III', 'II, III, IV', 'Tất cả các phương án trên'
        ],
        answer: 'II, III, IV'
    }, 
    {
        question: 'Tổ chức niêm yết không phải công bố thông tin trong 24 giờ kể từ khi xảy ra sự kiện nào' ,
        choices: [
            'có quyết định mua lại CP của chính mình', 
            'có quyểt định thay đổi DN kiểm toán', 
            'có quyết định của cơ quan thuế v/v vi phạm luật thuế',
            'khi giá cổ phiếu tăng trần hoặc giảm sàn 10 phiên liên tiếp'
        ],
        answer: 'khi giá cổ phiếu tăng trần hoặc giảm sàn 10 phiên liên tiếp'
    },
    {
        question: 'Tổ chức niêm yết CP, công ty đại chúng quy mô lớn phải công bố thông tin bất thường trong vòng 24h, kể từ khi vay có giá trị bao nhiêu % tổng tài sản của công ty',
        choices: [
            '10%', '20%', '25%', '30%'
        ],
        answer: '10%'
    }, 
    {
        question: 'Sở giao dịch CK VN được chấp thuận các đối tượng nào trở thành thành viên \nI. Công ty CK \nII. Ngân hàng thương mại \nIII. Chi nhánh ngân hàng nước ngoài \nIV. Công ty đại chúng',
        choices: [
            'I', 'I, II', 'I, II, III', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, III'
    }, 
    {
        question: 'Loại trái phiếu DN nào được niêm yết trên Sở giao dịch CK VN theo nghị định 155/2020/NĐ-CP \nI. Trái phiếu đã chào bán ra công chúng \nII. Trái phiếu chào bán riêng lẻ \nIII.Trái phiếu chào bán riêng lẻ và chào bán ra công chúng của công ty đại chúng \nIV. Trái phiếu chào bán riêng lẻ và chào bán ra công chúng của tất cả các doanh nghiệp đáp ứng điều kiện về vốn, khả năng tài chính',
        choices: [
            'I', 'I, II', 'I, II, III', 'Tất cả các phương án trên'
        ], 
        answer: 'I'
    },
    {
        question: 'Tổ chức, cá nhân nào có nghĩa vụ đăng ký mã số giao dịch trên TTCK \nI. NĐT nước ngoài \nII. Tổ chức phát hành chứng chỉ lưu ký tại nước ngoài \nIII. Tổ chức kinh tế có NĐT nước ngoài nắm trên 50% cổ phần \nIV. Tất cả NĐT tham gia TTCK',
        choices: [
            'I', 'I, II', 'I, II, III', 'IV' 
        ],
        answer: 'I, II, III'
    }, 
    {
        question: 'Tổ chức, cá nhân đã được cấp mã số giao dịch CK phải báo cáo Tổng công ty lưu ký bù trừ CKCN v/v thay đổi thông tin liên quan đến mã số giao dịch CK trong các trường hợp nào \nI.Thay đổi thành viên lưu ký \nII.Thay đổi tên, quốc giá hoặc vùng lãnh thổ nơi đăng ký hoạt động, địa chỉ trụ sở chính, số giấy phép đăng ký kinh doanh đối với tổ chức \n III. Thay đổi tên, quốc tịch, địa chỉ liên lạc, số hộ chiếu hoặc chứng thực cá nhân hợp pháp khác đối với cá nhân \nIV. Thay đối số lượng CK nắm giữ',
        choices: [
            'I', 'II, III', 'I, II, III', 'Tất cả các phương án trên'
        ],
        answer: 'I, II, III'
    }
]

export default questionBank