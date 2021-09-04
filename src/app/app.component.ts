import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  bienA = '';
  id = '';
  ketquathuc = [] as any;
  dapAn = {
    Sheet1: [
      {
        stt: '1',
        cauhoi:
          ' Tổ chức và hoạt động của tổ chức Công đoàn Việt Nam được quy định trong Điều nào của Hiến pháp năm 2013?',
        dapan1: 'Điều 10',
        dapan2: 'Điều 11',
        dapan3: 'Điều 14',
        dapan4: 'Điều 9',
        ketqua: 'A',
      },
      {
        stt: '2',
        cauhoi: 'Công đoàn Việt Nam thành lập vào ngày, tháng, năm?',
        dapan1: 'Ngày 27/8/1927',
        dapan2: 'Ngày 28/7/1929',
        dapan3: 'Ngày 28/7/1928',
        dapan4: 'Ngày 28/7/1927',
        ketqua: 'B',
      },
      {
        stt: '3',
        cauhoi:
          'Luật Công đoàn số 12/2012/QH13 năm 2012 được Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XIII, kỳ họp thứ 3 thông qua ngày, tháng, năm nào?',
        dapan1: ' 02/6/2012',
        dapan2: ' 02/7/2012',
        dapan3: '    20/6/2012',
        dapan4: '20/7/2012',
        ketqua: 'C',
      },
      {
        stt: '4',
        cauhoi: 'Công đoàn Việt Nam là tổ chức:',
        dapan1: 'Chính trị',
        dapan2: 'Chính trị - xã hội',
        dapan3: 'Chính trị xã hội - nghề nghiệp.',
        dapan4: 'Xã hội - nghề nghiệp.',
        ketqua: 'B',
      },
      {
        stt: '5',
        cauhoi: 'Quyền công đoàn là:',
        dapan1: 'Quyền thành lập, gia nhập tổ chức công đoàn',
        dapan2:
          'Quyền hoạt động công đoàn của người lao động, đoàn viên công đoàn.',
        dapan3:
          'Quyền của tổ chức Công đoàn theo quy định của pháp luật và quy định của cơ quan có thẩm quyền.',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'D',
      },
      {
        stt: '6',
        cauhoi:
          'Theo Luật Công đoàn 2012, hành vi nào sau đây là hành vi bị nghiêm cấm ?',
        dapan1:
          'Cản trở, gây khó khăn trong việc thực hiện quyền công đoàn. Phân biệt đối xử hoặc có hành vi gây bất lợi đối với người lao động vì lý do thành lập, gia nhập và hoạt động công đoàn.',
        dapan2:
          'Sử dụng biện pháp kinh tế hoặc biện pháp khác gây bất lợi đối với tổ chức và hoạt động công đoàn ',
        dapan3:
          'Lợi dụng quyền công đoàn để vi phạm pháp luật, xâm phạm lợi ích của Nhà nước, quyền, lợi ích hợp pháp của cơ quan, tổ chức, doanh nghiệp, cá nhân',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'D',
      },
      {
        stt: '7',
        cauhoi:
          'Điều 10 Luật Công đoàn quy định quyền, trách nhiệm của công đoàn trong việc đại diện, bảo vệ quyền, lợi ích hợp pháp, chính đáng của người lao động gồm bao nhiêu nội dung?',
        dapan1: '7 nội dung.',
        dapan2: '8 nội dung.',
        dapan3: '9 nội dung.',
        dapan4: '10 nội dung.',
        ketqua: 'D',
      },
      {
        stt: '8',
        cauhoi:
          'Luật Công đoàn năm 2012 quy định: Cán bộ công đoàn không chuyên trách là?',
        dapan1:
          'Người làm việc kiêm nhiệm được Hội nghị công đoàn các cấp bầu ra hoặc được Ban chấp hành công đoàn chỉ định, bổ nhiệm vào chức danh từ Tổ phó tổ công đoàn trở lên',
        dapan2:
          'Người làm việc kiêm nhiệm được Đại hội công đoàn, Hội nghị công đoàn các cấp bầu ra hoặc được Ban chấp hành công đoàn chỉ định, bổ nhiệm vào chức danh từ Tổ phó tổ công đoàn trở lên',
        dapan3:
          'Người làm việc kiêm nhiệm được Ban chấp hành công đoàn chỉ định, bổ nhiệm vào chức danh từ Tổ phó tổ công đoàn trở lên',
        dapan4:
          'Người làm việc kiêm nhiệm được Đại hội công đoàn, Hội nghị công đoàn các cấp bầu ra hoặc được Ban chấp hành công đoàn chỉ định, bổ nhiệm  ',
        ketqua: 'B',
      },
      {
        stt: '9',
        cauhoi:
          'Quan hệ giữa Nhà nước, cơ quan, tổ chức, doanh nghiệp với Công đoàn là quan hệ:',
        dapan1: 'Liên minh chính trị, liên hiệp tự nguyện',
        dapan2: 'Phụ thuộc hai chiều',
        dapan3: 'Hợp tác, phối hợp',
        dapan4: 'Cấp trên cấp dưới',
        ketqua: 'C',
      },
      {
        stt: '10',
        cauhoi:
          'Cán bộ công đoàn không chuyên trách khi nghỉ làm việc trong những ngày tham dự cuộc họp, tập huấn do công đoàn cấp trên triệu tập thì có được đơn vị sử dụng lao động chi trả lương trong những ngày nghỉ này hay không?',
        dapan1: 'Được trả lương theo \r\nbảo hiểm xã hội ',
        dapan2: 'Có',
        dapan3: 'Do hai bên thỏa thuận',
        dapan4: 'Không',
        ketqua: 'B',
      },
      {
        stt: '11',
        cauhoi:
          'Việc cơ quan, tổ chức, doanh nghiệp lấy ý kiến của công đoàn cùng cấp trước khi quyết định những vấn đề liên quan đến quyền, nghĩa vụ của người lao động là:',
        dapan1: 'Sự tự nguyện',
        dapan2: 'Trách nhiệm bắt buộc theo quy định của pháp luật.',
        dapan3:
          'Việc lấy hay không lấy ý kiến còn tùy vào sự thỏa thuận giữa cơ quan, tổ chức, doanh nghiệp với công đoàn cùng cấp.',
        dapan4: 'Cả A và C đều đúng ',
        ketqua: 'B',
      },
      {
        stt: '12',
        cauhoi:
          'Luật Công đoàn năm 2012 quy định: Đoàn viên công đoàn đóng đoàn phí công đoàn theo quy định nào?',
        dapan1: 'Theo quy định của Điều lệ Công đoàn Việt Nam',
        dapan2: 'Theo quy định của Công đoàn cấp trên',
        dapan3: 'Theo quy định của Tổng Liên đoàn Lao động Việt Nam',
        dapan4: 'Theo quy định của \r\nBộ Tài chính',
        ketqua: 'A',
      },
      {
        stt: '13',
        cauhoi:
          'Việc đóng kinh phí công đoàn được quy định chi tiết tại Nghị định nào sau đây:',
        dapan1: 'Nghị định số 43/2013/NĐ-CP ngày 10/5/2013',
        dapan2: 'Nghị định số 191/2013/NĐ-CP ngày 21/11/2013.',
        dapan3: 'Nghị định số 60/2013/NĐ-CP ngày 19/06/2013.',
        dapan4: 'Nghị định số 200/2013/NĐ-CP ngày 26/11/2013.',
        ketqua: 'B',
      },
      {
        stt: '14',
        cauhoi:
          'Chủ tịch, Phó Chủ tịch công đoàn cơ sở là cán bộ công đoàn không chuyên trách được sử dụng bao nhiêu thời gian làm việc trong một tháng để làm công tác công đoàn và được đơn vị sử dụng lao động trả lương:',
        dapan1: '03 ngày làm việc',
        dapan2: '24 giờ làm việc',
        dapan3: '02 ngày làm việc',
        dapan4: '12 giờ làm việc',
        ketqua: 'B',
      },
      {
        stt: '15',
        cauhoi:
          'Trách nhiệm đóng kinh phí công đoàn theo quy định tại Nghị định số 191/2013/NĐ-CP ngày 21/11/2013 thuộc về:',
        dapan1: 'Đoàn viên công đoàn.',
        dapan2: 'Người lao động trong cơ quan, đơn vị, doanh nghiệp.',
        dapan3: 'Người sử dụng lao động trong cơ quan, đơn vị, doanh nghiệp.',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'C',
      },
      {
        stt: '16',
        cauhoi: 'Mức đóng và căn cứ đóng kinh phí công đoàn là:',
        dapan1:
          'Mức đóng bằng 1% căn cứ trên tổng quỹ tiền lương và phụ cấp mà cơ quan, đơn vị, doanh nghiệp phải trả cho người lao động hàng tháng.',
        dapan2:
          'Mức đóng bằng 2% căn cứ trên tổng quỹ tiền lương và phụ cấp mà cơ quan, đơn vị, doanh nghiệp phải trả cho người lao động hàng tháng.',
        dapan3:
          'Mức đóng bằng 1% tổng mức tiền lương của những người lao động thuộc đối tượng phải đóng bảo hiểm xã hội theo quy định của pháp luật về bảo hiểm xã hội mà cơ quan, đơn vị, doanh nghiệp làm căn cứ đóng bảo hiểm xã hội cho người lao động hàng tháng.',
        dapan4:
          'Mức đóng bằng 2% tổng mức tiền lương của những người lao động thuộc đối tượng phải đóng bảo hiểm xã hội theo quy định của pháp luật về bảo hiểm xã hội mà cơ quan, đơn vị, doanh nghiệp làm căn cứ đóng bảo hiểm xã hội cho người lao động hàng tháng.',
        ketqua: 'D',
      },
      {
        stt: '17',
        cauhoi: 'Chức năng của tổ chức công đoàn Việt Nam:',
        dapan1:
          'Đại diện cho cán bộ, công chức, viên chức, công nhân và những người lao động khác (sau đây gọi chung là người lao động) cùng với cơ quan nhà nước, tổ chức kinh tế, tổ chức xã hội chăm lo và bảo vệ quyền, lợi ích hợp pháp, chính đáng của người lao động',
        dapan2:
          'Tham gia quản lý nhà nước, quản lý kinh tế - xã hội, tham gia thanh tra, kiểm tra, giám sát hoạt động của cơ quan nhà nước, tổ chức, đơn vị, doanh nghiệp',
        dapan3:
          'Tuyên truyền, vận động người lao động học tập nâng cao trình độ, kỹ năng nghề nghiệp, chấp hành pháp luật, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa',
        dapan4: 'Cả 3 nội dung trên',
        ketqua: 'D',
      },
      {
        stt: '18',
        cauhoi:
          'Quyền của đoàn viên công đoàn được quy định như thế nào trong Luật Công đoàn 2012?',
        dapan1:
          ' Yêu cầu công đoàn đại diện, bảo vệ quyền, lợi ích hợp pháp, chính đáng khi bị xâm phạm;',
        dapan2:
          ' Được thông tin, thảo luận, đề xuất và biểu quyết công việc của công đoàn; được thông tin về đường lối, chủ trương, chính sách của Đảng và pháp luật của Nhà nước liên quan đến Công đoàn, người lao động, quy định của công đoàn; Được quyền ứng cử, đề cử, bầu cử cơ quan lãnh đạo công đoàn, được chất vấn cán bộ lãnh đạo công đoàn và kiến nghị xử lý kỷ luật cán bộ công đoàn có sai phạm.',
        dapan3:
          'Được Công đoàn tư vấn pháp luật, trợ giúp pháp lý miễn phí pháp luật về lao động, công đoàn; Được hướng dẫn giúp đỡ tìm việc, học nghề; thăm hỏi, giúp đỡ khi ốm đau hoặc gặp hoàn cảnh khó khăn;Tham gia các hoạt động văn hóa, thể thao, du lịch do công đoàn tổ chức; Được đề xuất, kiến nghị cơ quan, tổ chức, doanh nghiệp thực hiện chế độ chính sách pháp luật đối với người lao động.',
        dapan4: 'Tất cả các quyền nêu trên.',
        ketqua: 'D',
      },
      {
        stt: '19',
        cauhoi:
          'Quyền và trách nhiệm của công đoàn trong công tác tuyên truyền, vận động, giáo dục người lao động?',
        dapan1:
          'Tuyên truyền đường lối, chủ trương, chính sách của Đảng, pháp luật của Nhà nước liên quan đến Công đoàn, người lao động; quy định của Công đoàn',
        dapan2:
          'Tuyên truyền, vận động, giáo dục người lao động học tập, nâng cao trình độ chính trị, văn hóa, chuyên môn, kỹ năng nghề nghiệp, ý thức chấp hành pháp luật, nội quy, quy chế của cơ quan, tổ chức, doanh nghiệp',
        dapan3:
          'Tuyên truyền, vận động, giáo dục người lao động thực hành tiết kiệm, chống lãng phí, đấu tranh phòng, chống tham nhũng',
        dapan4: 'Cả A, B và C',
        ketqua: 'D',
      },
      {
        stt: '20',
        cauhoi:
          'Quyền, trách nhiệm của công đoàn trong việc đối thoại với đơn vị sử dụng lao động để giải quyết các vấn đề liên quan đến quyền lợi và nghĩa vụ của người lao động là gì?',
        dapan1:
          'Thu thập thông tin, tập hợp kiến nghị, đề xuất nội dung có liên quan đến lợi ích hợp pháp, chính đáng của người lao động; yêu cầu người sử dụng lao động tổ chức đối thoại tại nơi làm việc theo quy định của pháp luật về lao động',
        dapan2:
          'Tiến hành đối thoại định kỳ hoặc đột xuất với người sử dụng lao động; phối hợp cùng người sử dụng lao động tổ chức Hội nghị người lao động, Hội nghị cán bộ công chức theo quy định của pháp luật',
        dapan3:
          'Giám sát việc thực hiện Nghị quyết Hội nghị người lao động, Nghị quyết Hội nghị cán bộ công chức, các thỏa thuận đạt được qua đối thoại tại nơi làm việc và quy chế dân chủ ở cơ sở theo quy định của pháp luật',
        dapan4: 'Cả A , B, C đều đúng',
        ketqua: 'D',
      },
      {
        stt: '21',
        cauhoi:
          'Trong công tác tham gia quản lý, quyền và trách nhiệm của Công đoàn như thế nào đối với việc thực hiện quy chế dân chủ trong cơ quan, tổ chức, doanh nghiệp?',
        dapan1: 'Tham gia xây dựng và thực hiện quy chế dân chủ',
        dapan2: 'Phối hợp xây dựng quy chế dân chủ',
        dapan3: 'Phối hợp thực hiện quy chế dân chủ',
        dapan4: 'Xây dựng quy chế dân chủ',
        ketqua: 'A',
      },
      {
        stt: '22',
        cauhoi: 'Tài chính công đoàn gồm các nguồn thu nào sau đây:',
        dapan1:
          'Đoàn phí công đoàn do đoàn viên đóng theo quy định của Điều lệ Công đoàn Việt Nam.',
        dapan2:
          'Kinh phí công đoàn do cơ quan, tổ chức, doanh nghiệp đóng theo quy định của pháp luật.',
        dapan3:
          'Ngân sách nhà nước cấp hỗ trợ; Nguồn thu khác từ hoạt động văn hóa, thể thao, hoạt động kinh tế của Công đoàn; từ đề án, dự án do Nhà nước giao; từ viện trợ, tài trợ của tổ chức, cá nhân trong nước và nước ngoài',
        dapan4: 'Cả A , B, C đều đúng',
        ketqua: 'D',
      },
      {
        stt: '23',
        cauhoi: 'Tranh chấp về quyền công đoàn là:',
        dapan1:
          'Tranh chấp phát sinh giữa người lao động là đoàn viên với người sử dụng lao động về việc thực hiện quyền công đoàn.',
        dapan2:
          'Tranh chấp phát sinh giữa tổ chức công đoàn với cơ quan nhà nước về việc thực hiện quyền công đoàn.',
        dapan3:
          'Tranh chấp phát sinh giữa người lao động, đoàn viên công đoàn, tổ chức công đoàn với đơn vị sử dụng lao động về việc thực hiện quyền công đoàn.',
        dapan4: 'Cả A, B, C đều sai',
        ketqua: 'C',
      },
      {
        stt: '24',
        cauhoi:
          'Người sử dụng lao động vi phạm quy định về đảm bảo thực hiện quyền công đoàn có thể bị cơ quan quản lý nhà nước về lao động xử phạt vi phạm hành chính bằng hình thức nào sau đây:',
        dapan1: 'Lập biên bản phạt cảnh cáo.',
        dapan2: 'Phạt tiền',
        dapan3:
          'Tùy vào trường hợp, mức độ vi phạm mà cơ quan chức năng có thể lập biên bản phạt cảnh cáo hoặc phạt tiền.',
        dapan4: 'Rút giấy phép hoạt động.',
        ketqua: 'B',
      },
      {
        stt: '25',
        cauhoi:
          'Mức tiền phạt đối với người sử dụng lao động có hành vi không thực hiện đối thoại khi đại diện tập thể lao động yêu cầu là:',
        dapan1: 'Từ 1.000.000 đồng đến 2.000.000 đồng',
        dapan2: 'Từ 2.000.000 đồng đến 5.000.000 đồng.',
        dapan3: 'Từ 5.000.000 đồng đến 10.000.000 đồng',
        dapan4: 'Từ 10.000.000 đồng đến dưới 20.000.000 đồng',
      },
      {
        stt: '26',
        cauhoi:
          'Hành vi nào sau đây vi phạm quy định về đóng kinh phí công đoàn?',
        dapan1: 'Chậm đóng kinh phí công đoàn',
        dapan2: 'Đóng kinh phí công đoàn không đúng mức quy định.',
        dapan3:
          'Đóng kinh phí công đoàn không đủ số người thuộc đối tượng phải đóng',
        dapan4: 'Cả A , B, C đều đúng',
        ketqua: 'D',
      },
      {
        stt: '27',
        cauhoi:
          'Người sử dụng lao động vi phạm quy định về đóng kinh phí công đoàn sẽ bị cơ quan quản lý nhà nước về lao động xử phạt vi phạm hành chính bằng hình thức nào sau đây:',
        dapan1: 'Lập biên bản cảnh cáo.',
        dapan2: ' Phạt tiền',
        dapan3: 'A hoặc B đều đúng.',
        dapan4: 'Cả A và B đều sai.',
        ketqua: 'B',
      },
      {
        stt: '28',
        cauhoi:
          'Mức tiền phạt đối với từng hành vi “chậm đóng kinh phí công đoàn”, “đóng kinh phí công đoàn không đúng mức quy định”, “đóng kinh phí công đoàn không đủ số người thuộc đối tượng phải đóng” là:',
        dapan1: 'Từ 10.000.000 đồng đến 20.000.000 đồng',
        dapan2: 'Từ 20.000.000 đồng đến 30.000.000 đồng',
        dapan3: 'Từ 30.000.000 đồng đến 50.000.000 đồng',
        dapan4:
          'Phạt tiền với mức từ 12% đến dưới 15% tổng số tiền phải đóng kinh phí công đoàn tại thời điểm lập biên bản vi phạm hành chính nhưng tối đa không quá 75.000.000 đồng',
        ketqua: 'D',
      },
      {
        stt: '29',
        cauhoi: 'Tài chính công đoàn để chi các nội dung nào sau đây?',
        dapan1:
          'Trả lương cán bộ công đoàn chuyên trách, phụ cấp trách nhiệm cán bộ công đoàn.',
        dapan2:
          'Chi các hoạt động công đoàn bao gồm cả chi khen thưởng cho các tập thể, cán bộ, đoàn viên và những người có công xây dựng tổ chức công đoàn.',
        dapan3:
          'Chi thăm hỏi, giúp đỡ đoàn viên và làm công tác xã hội do công đoàn tổ chức.',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'D',
      },
      {
        stt: '30',
        cauhoi:
          'Đoàn viên công đoàn nghỉ việc riêng từ 01 tháng trở lên không hưởng lương thì trong thời gian đó có phải đóng đoàn phí không?',
        dapan1: 'Đóng đoàn phí đầy đủ',
        dapan2: 'Đóng 50% đoàn phí',
        dapan3: 'Đóng 30% đoàn phí',
        dapan4: 'Không đóng đoàn phí',
        ketqua: 'D',
      },
      {
        stt: '31',
        cauhoi:
          'Nguồn thu khác của CĐCS do cấp công đoàn nào quyết định việc phân bổ cho các khoản mục chi?',
        dapan1: 'Công đoàn cơ sở',
        dapan2: 'Công đoàn cấp trên trực tiếp cơ sở',
        dapan3: 'Công đoàn ngành trung ương',
        dapan4: 'Công đoàn Việt Nam',
        ketqua: 'A',
      },
      {
        stt: '32',
        cauhoi:
          'Theo quy định của Điều lệ Công đoàn Việt Nam (khóa XII) Đoàn viên Công đoàn có mấy quyền ?',
        dapan1: '9 quyền',
        dapan2: '8 quyền',
        dapan3: '7 quyền',
        dapan4: '6 quyền',
        ketqua: 'C',
      },
      {
        stt: '33',
        cauhoi:
          'Theo quy định của Điều lệ Công đoàn Việt Nam (khóa XII), Đoàn viên Công đoàn có mấy nhiệm vụ ?',
        dapan1: '7 nhiệm vụ',
        dapan2: '6 nhiệm vụ',
        dapan3: '5 nhiệm vụ',
        dapan4: '4 nhiệm vụ',
        ketqua: 'D',
      },
      {
        stt: '34',
        cauhoi:
          'Việc giải thể, chấm dứt hoạt động của công đoàn cơ sở do công đoàn cấp nào xem xét quyết định ?',
        dapan1: 'Công đoàn cấp trên trực tiếp cơ sở xem xét quyết định.',
        dapan2: 'Công đoàn cấp trên cơ sở xem xét quyết định.',
        dapan3: 'Công đoàn ngành xem xét quyết định.',
        dapan4: 'Công đoàn Việt Nam xem xét quyết định.',
        ketqua: 'A',
      },
      {
        stt: '35',
        cauhoi: 'Tên bài hát truyền thống của Công đoàn Việt Nam hiện nay là:',
        dapan1: 'Bài ca Tổng Liên đoàn Lao động Việt Nam',
        dapan2: 'Bài ca Công đoàn',
        dapan3: 'Ca ngợi Công đoàn Việt Nam',
        dapan4: 'Hãy hát lên bài ca Công đoàn',
        ketqua: 'D',
      },
      {
        stt: '36',
        cauhoi: 'Công đoàn cơ sở là tổ chức cơ sở của: ',
        dapan1: 'Liên đoàn Lao động tỉnh, thành phố',
        dapan2: 'Công đoàn Việt Nam',
        dapan3: 'Công đoàn Ngân hàng Việt Nam',
        dapan4: 'Tổng Liên đoàn lao động Việt Nam',
        ketqua: 'B',
      },
      {
        stt: '37',
        cauhoi: 'Cơ quan lãnh đạo cao nhất của mỗi cấp công đoàn là: ',
        dapan1: 'Đại hội công đoàn cấp đó',
        dapan2: 'Công đoàn cấp trên',
        dapan3: 'Công đoàn cấp trên cơ sở',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'A',
      },
      {
        stt: '38',
        cauhoi: 'Công đoàn cơ sở có thể tổ chức theo hình thức nào ?',
        dapan1: 'Công đoàn cơ sở thành viên, công đoàn bộ phận, tổ công đoàn',
        dapan2: ' Công đoàn bộ phận, tổ công đoàn',
        dapan3: 'Công đoàn bộ phận',
        dapan4: 'Công đoàn cơ sở thành viên, công đoàn bộ phận',
        ketqua: 'A',
      },
      {
        stt: '39',
        cauhoi:
          'Công đoàn cơ sở giải thể, chấm dứt hoạt động trong những trường hợp nào ?',
        dapan1: 'Đơn vị sử dụng lao động chấm dứt hoạt động',
        dapan2:
          'Công đoàn cơ sở hoạt động không đúng theo tôn chỉ mục đích, quy định của Điều lệ Công đoàn Việt Nam',
        dapan3: 'Không đủ số lượng đoàn viên theo quy định.',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'D',
      },
      {
        stt: '40',
        cauhoi:
          'Ban chấp hành công đoàn các cấp (nơi có Ban Thường vụ) họp định kỳ mấy tháng một lần ?',
        dapan1: '03 tháng 1 lần',
        dapan2: '06 tháng 1 lần',
        dapan3: '09 tháng 1 lần',
        dapan4: '01 năm 1 lần',
        ketqua: 'A',
      },
      {
        stt: '41',
        cauhoi:
          'Việc thành lập, giải thể, tổ chức và hoạt động của công đoàn cơ sở được thực hiện theo quy định của Luật nào?',
        dapan1: 'Luật Công chức',
        dapan2: 'Bộ luật Lao động',
        dapan3: 'Luật Công đoàn',
        dapan4: 'Luật Doanh nghiệp',
        ketqua: 'C',
      },
      {
        stt: '42',
        cauhoi:
          'Hình thức xử lý kỷ luật đối với tổ chức công đoàn, tập thể ban chấp hành, ban thường vụ, ủy ban kiểm tra công đoàn các cấp: ',
        dapan1: 'Khiển trách, cảnh cáo, giải tán',
        dapan2: 'Khiển trách',
        dapan3: 'Cảnh cáo',
        dapan4: 'Giải tán.',
        ketqua: 'A',
      },
      {
        stt: '43',
        cauhoi:
          'Công đoàn cấp trên trực tiếp cơ sở có mấy nhiệm vụ, quyền hạn ?',
        dapan1: '7',
        dapan2: '8',
        dapan3: '9',
        dapan4: '10',
        ketqua: 'C',
      },
      {
        stt: '44',
        cauhoi: 'Hình thức xử lý kỷ luật đối với đoàn viên công đoàn ?',
        dapan1: 'Khiển trách, cảnh cáo',
        dapan2: 'Khiển trách, cảnh cáo, khai trừ',
        dapan3: 'Cảnh cáo,  cách chức, khai trừ',
        dapan4: 'Khiển trách, cảnh cáo,  cách chức, khai trừ',
        ketqua: 'B',
      },
      {
        stt: '45',
        cauhoi:
          'Sau bao lâu kể từ khi có quyết định kỷ luật, nếu đoàn viên hoặc cán bộ công đoàn bị kỷ luật có tiến bộ, không tái phạm thì quyết định kỷ luật đương nhiên chấm dứt hiệu lực ?',
        dapan1: 'Sau 6 tháng',
        dapan2: 'Sau 9 tháng',
        dapan3: 'Sau một năm',
        dapan4: 'Sau 18 tháng',
        ketqua: 'C',
      },
      {
        stt: '46',
        cauhoi: 'Hình thức xử lý kỷ luật đối với cán bộ công đoàn gồm:',
        dapan1: 'Khiển trách, cảnh cáo,  cách chức',
        dapan2: 'Cảnh cáo,  cách chức, khai trừ',
        dapan3: 'Khiển trách, cảnh cáo,  cách chức, khai trừ',
        dapan4: 'Cách chức, khai trừ',
        ketqua:
          'Ko rõ ràng vì có quy định cụ thể cho Cb công đoàn chuyên trách và không chuyên trách điều 44 điều lệ CĐ',
      },
      {
        stt: '47',
        cauhoi:
          'Số lượng đại biểu chính thức bầu dự đại hội, hội nghị công đoàn cấp trên do ai quyết định ?',
        dapan1: 'Do Ban chấp hành cùng cấp quy định',
        dapan2: 'Do Đại hội, hội nghị quy đinh',
        dapan3: 'Thực hiện theo phân bổ của công đoàn cấp trên',
        dapan4: 'Do Chủ tịch công đoàn cấp trên quyết  định',
        ketqua: 'C',
      },
      {
        stt: '48',
        cauhoi: 'Công đoàn Việt Nam có mấy cấp ?',
        dapan1: 'Cấp Trung ương, cấp tỉnh, cấp huyện.',
        dapan2: 'Cấp tỉnh, ngành trung ương, cấp cơ sở',
        dapan3:
          'Cấp Trung ương; Cấp tỉnh, ngành trung ương; Cấp trên trực tiếp cơ sở; Cấp cơ sở',
        dapan4: 'Cấp Trung ương; Cấp tỉnh; Cấp trên trực tiếp cơ sở; Cấp cơ sở',
        ketqua: 'C',
      },
      {
        stt: '49',
        cauhoi: 'Cơ quan lãnh đạo cao nhất của Công đoàn Việt Nam là:',
        dapan1: 'Hội nghị ban chấp hành Tổng liên đoàn Lao động Việt Nam',
        dapan2: 'Đại hội đại biểu toàn quốc',
        dapan3: 'Đại hội toàn quốc',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'A',
      },
      {
        stt: '50',
        cauhoi: 'Thẻ đoàn viên là:',
        dapan1: 'Sự xác nhận tư cách đoàn viên của tổ chức công đoàn',
        dapan2:
          'Sự xác nhận tư cách đoàn viên của tổ chức công đoàn với một cá nhân cụ thể',
        dapan3:
          'Sự xác nhận đoàn viên của tổ chức công đoàn với một cá nhân cụ thể',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'B',
      },
      {
        stt: '51',
        cauhoi:
          ' Cơ quan lãnh đạo của công đoàn mỗi cấp giữa hai kỳ đại hội là : ',
        dapan1: 'Ủy ban kiểm tra',
        dapan2: 'Ban Thường vụ',
        dapan3: 'Ban chấp hành.',
        dapan4: 'Cả A, B, C đều đúng',
        ketqua: 'C',
      },
      {
        stt: '52',
        cauhoi: 'Công đoàn cấp nào có Ủy ban kiểm tra?',
        dapan1: 'Công đoàn cấp trên trực tiếp cơ sở trở lên',
        dapan2:
          'Công đoàn các cấp cấp trên cơ sở trở lên và công đoàn cơ sở có từ ba mươi đoàn viên trở lên ',
        dapan3: 'Công đoàn cơ sở thành viên trở lên',
        dapan4: 'Công đoàn bộ phận trở lên',
        ketqua: 'B',
      },
      {
        stt: '53',
        cauhoi: 'Ủy ban kiểm tra công đoàn được thành lập như thế nào?',
        dapan1: 'Do công đoàn cấp trên chỉ định',
        dapan2:
          'Do ban chấp hành công đoàn cùng cấp bầu hoặc công đoàn cấp trên trực tiếp chỉ định',
        dapan3: 'Do Ban Thường vụ công đoàn cùng cấp bầu',
        dapan4: 'Do đại hội công đoàn cấp đó bầu',
        ketqua: 'B',
      },
      {
        stt: '54',
        cauhoi: 'Số lượng ủy viên Ủy ban kiểm tra công đoàn do đâu quyết định?',
        dapan1: 'Do Ban Thường vụ công đoàn cùng cấp          ',
        dapan2: 'Do ủy ban kiểm tra',
        dapan3: 'Do Ban Chấp hành công đoàn cùng cấp          ',
        dapan4: 'Do công đoàn cấp trên',
        ketqua: 'C',
      },
      {
        stt: '55',
        cauhoi:
          'Số lượng ủy viên Ủy ban kiểm tra công đoàn cấp trên trực tiếp cơ sở theo quy định không quá bao nhiêu là đúng?',
        dapan1: 'Không quá 09 ủy viên',
        dapan2: 'Không quá 11 ủy viên',
        dapan3: 'Không quá 13 ủy viên',
        dapan4: 'Không quá 15 ủy viên         ',
        ketqua: 'A',
      },
      {
        stt: '56',
        cauhoi:
          'Số lượng ủy viên Ban Chấp hành công đoàn cùng cấp tham gia ủy ban kiểm tra như thế nào là đúng?',
        dapan1: 'Không vượt quá hai phần ba (2/3)    ',
        dapan2: 'Không vượt quá ba phần năm (3/5)',
        dapan3: 'Không vượt quá một phần ba (1/3)   ',
        dapan4: 'Không vượt quá năm phần bảy (5/7)',
        ketqua: 'C',
      },
      {
        stt: '57',
        cauhoi:
          'Số lượng ủy viên Ủy ban kiểm tra công đoàn cơ sở theo quy định không quá bao nhiêu là đúng?',
        dapan1: 'Không quá 03 ủy viên',
        dapan2: 'Không quá 05 ủy viên',
        dapan3: 'Không quá 07 ủy viên',
        dapan4: 'Không quá 09 ủy viên         ',
        ketqua: 'C',
      },
      {
        stt: '58',
        cauhoi: 'Chủ nhiệm Ủy ban kiểm tra công đoàn các cấp do đâu bầu ra?',
        dapan1: 'Do Ban Thường vụ công đoàn cùng cấp bầu  ',
        dapan2: 'Do Ủy ban kiểm tra cấp đó bầu ',
        dapan3: 'Do Ban Chấp hành công đoàn cùng cấp bầu ',
        dapan4: 'Do Ban Chấp hành công đoàn cấp trên bầu         ',
        ketqua: 'C',
      },
      {
        stt: '59',
        cauhoi: 'Nhiệm kỳ của ủy ban kiểm tra công đoàn được tính như thế nào?',
        dapan1: 'Tính bằng một phần hai (1/2) nhiệm kỳ của công đoàn cấp đó',
        dapan2: 'Theo nhiệm kỳ của Ban chấp hành công đoàn cấp trên',
        dapan3: 'Theo nhiệm kỳ của ban chấp hành công đoàn cùng cấp',
        dapan4: 'Theo nhiệm kỳ của ban chấp hành công đoàn cấp dưới',
        ketqua: 'C',
      },
      {
        stt: '60',
        cauhoi:
          'Phó Chủ nhiệm ủy ban kiểm tra công đoàn các cấp do đâu bầu ra?',
        dapan1: 'Do Ban thường vụ công đoàn cùng cấp bầu.  ',
        dapan2: 'Do ủy ban kiểm tra cấp cùng cấp bầu',
        dapan3: 'Do ban chấp hành công đoàn cùng cấp bầu.',
        dapan4: 'Do ban chấp hành công đoàn cấp dưới bầu.',
        ketqua: 'B',
      },
      {
        stt: '61',
        cauhoi:
          'Công đoàn cơ sở thành lập Ban nữ công quần chúng căn cứ vào điều kiện nào dưới đây?',
        dapan1: 'Có từ 10 nữ đoàn viên trở lên',
        dapan2: 'Có từ 9 nữ đoàn viên trở lên',
        dapan3: 'Có từ 5 nữ đoàn viên trở lên',
        dapan4: 'Có từ 3 nữ đoàn viên trở lên',
        ketqua: 'A',
      },
      {
        stt: '62',
        cauhoi:
          'Phong trào thi đua “Giỏi việc nước, đảm việc nhà” do tổ chức nào sau đây phát động ?',
        dapan1: 'Trung ương Hội Liên hiệp Phụ nữ Việt Nam',
        dapan2: 'Tổng Liên đoàn Lao động Việt Nam  ',
        dapan3: 'Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh',
        dapan4: 'Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam',
        ketqua: 'B',
      },
      {
        stt: '63',
        cauhoi: 'Ngày Gia đình Việt Nam là ngày nào sau đây?',
        dapan1: 'Ngày 28/7 hàng năm',
        dapan2: 'Ngày 21/02 hàng năm',
        dapan3: 'Ngày 25/11 hàng năm',
        dapan4: 'Ngày 28/6 hàng năm',
        ketqua: 'D',
      },
      {
        stt: '64',
        cauhoi:
          'Liên Hiệp Quốc lấy ngày nào là “Ngày quốc tế xóa bỏ bạo lực đối với Phụ nữ"?',
        dapan1: 'Ngày 20/3 hàng năm ',
        dapan2: 'Ngày 25/11 hàng năm',
        dapan3: 'Ngày 08/3 hàng năm',
        dapan4: 'Ngày 20/10 hàng năm ',
        ketqua: 'B',
      },
      {
        stt: '65',
        cauhoi:
          'Nội dung của Nghị quyết số 11-NQ/TW ngày 27 tháng 4 năm 2007 của Bộ Chính trị?',
        dapan1:
          'Về xây dựng gia đình thời kỳ công nghiệp hoá, hiện đại hoá đất nước ',
        dapan2:
          'Tăng cường và đổi mới sự lãnh đạo của Đảng đối với công tác dân vận trong tình hình mới',
        dapan3:
          'Về công tác phụ nữ thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước',
        dapan4:
          'Tăng cường sự lãnh đạo của Đảng đối với công tác chăm sóc, giáo dục và bảo vệ trẻ em trong tình hình mới',
        ketqua: 'C',
      },
      {
        stt: '66',
        cauhoi: 'Lao động nữ được nghỉ trước và sau khi sinh con mấy tháng?',
        dapan1: '04 tháng',
        dapan2: '05 tháng',
        dapan3: '06 tháng                                                     ',
        dapan4: '08 tháng',
        ketqua: 'C',
      },
      {
        stt: '67',
        cauhoi:
          'Tổ chức nào là tổ chức đại diện cho cán bộ, công chức, viên chức công nhân và những người lao động khác (gọi chung là người lao động); bảo vệ quyền và lợi ích hợp pháp, chính đáng của người lao động theo Luật Công đoàn 2012?',
        dapan1: 'Mặt trận Tổ quốc Việt Nam',
        dapan2: 'Công đoàn Việt Nam',
        dapan3: 'Đoàn Thanh niên Việt Nam',
        dapan4: 'Hội Liên hiệp Phụ nữ Việt Nam',
        ketqua: 'B',
      },
      {
        stt: '68',
        cauhoi:
          'Cán bộ công đoàn không chuyên trách tham dự cuộc họp, tập huấn do công đoàn cấp trên triệu tập thì chi phí đi lại, ăn ở và sinh hoạt trong những ngày tham dự cuộc họp, tập huấn do đơn vị nào chi trả?',
        dapan1: 'Công đoàn cơ sở \r\nchi trả',
        dapan2: 'Công đoàn cấp trên trực tiếp cơ sở chi trả',
        dapan3: 'Liên đoàn Lao động tỉnh chi trả',
        dapan4: 'Do cấp công đoàn \r\ntriệu tập chi trả',
        ketqua: 'D',
      },
      {
        stt: '69',
        cauhoi:
          'Những trường hợp nào sau đây không cơ cấu tham gia ủy ban kiểm tra công đoàn?',
        dapan1: 'Người được chủ tài khoản ủy quyền ',
        dapan2: 'Chủ tài khoản',
        dapan3:
          'Kế toán trưởng; Trưởng, Phó ban tài chính của công đoàn cùng cấp',
        dapan4: 'Cả 3 phương án trên đều đúng',
        ketqua: 'D',
      },
      {
        stt: '70',
        cauhoi:
          'Khi chuyển sinh hoạt công đoàn, đoàn viên phải thực hiện những  thủ tục nào?',
        dapan1:
          'Thông báo với Công đoàn cơ sở nơi đang sinh hoạt về việc chuyển sinh hoạt công đoàn',
        dapan2:
          ' Trình thẻ đoàn viên và bày tỏ nguyện vọng sinh hoạt công đoàn đối với ban chấp hành công đoàn cơ sở nơi đến để được tiếp tục sinh hoạt',
        dapan3: 'Cả A và B',
        dapan4: 'Không phải làm thủ tục gì',
        ketqua: 'B',
      },
      {
        stt: '1',
        cauhoi:
          'Kết luận số 06-KL/TW về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội được ban hành vào thời gian nào',
        dapan1: ' Ngày 10/6/2014.',
        dapan2: 'Ngày 22/11/2014.',
        dapan3: 'Ngày 10/6/2021.',
        dapan4: 'Ngày 22/6/2021.',
        ketqua: 'C',
      },
      {
        stt: '2',
        cauhoi:
          'Nội dung nào không phải là nội dung nhiệm vụ “Tăng cường sự lãnh đạo, chỉ đạo của các cấp ủy đảng, chính quyền đối với hoạt động tín dụng chính sách xã hội” tại Chỉ thị số 40-CT/TW ngày 22/11/2014 của Ban Bí thư',
        dapan1:
          'Các cấp ủy đảng, chính quyền các cấp cần xác định nhiệm vụ lãnh đạo, chỉ đạo đối với hoạt động tín dụng chính sách xã hội là một trong những nhiệm vụ trong chương trình và kế hoạch, hoạt động thường xuyên của các cấp ủy, các ngành, địa phương và đơn vị.',
        dapan2:
          'Tổ chức thực hiện tốt chủ trương huy động các nguồn lực cho tín dụng chính sách xã hội gắn với phát triển nông nghiệp, nông thôn, phát triển giáo dục, dạy nghề, tạo việc làm, bảo đảm an sinh xã hội và giảm nghèo bền vững.',
        dapan3:
          'Nâng cao trách nhiệm lãnh đạo, chỉ đạo của cấp ủy đảng, chính quyền trong việc củng cố, nâng cao chất lượng tín dụng chính sách xã hộ.',
        dapan4:
          'Nâng cao hiệu quả phương thức ủy thác cho các tổ chức chính trị - xã hội; tăng cường hoạt động tại các điểm giao dịch cấp xã; phát triển các sản phẩm, dịch vụ hỗ trợ đem lại tiện ích cho người nghèo và các đối tượng chính sách khác.',
        ketqua: 'D',
      },
      {
        stt: '3',
        cauhoi:
          'Kết luận số 06-KL/TW về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội giao cho đơn vị nào có trách nhiệm lãnh đạo, chỉ đạo, tổ chức thực hiện',
        dapan1: 'Các tỉnh uỷ, thành uỷ, các ban đảng.',
        dapan2:
          'Các tỉnh uỷ, thành uỷ, các ban đảng, ban cán sự đảng, đảng đoàn, đảng uỷ trực thuộc Trung ương.',
        dapan3:
          'Các tỉnh uỷ, thành uỷ, các ban đảng, ban cán sự đảng, đảng đoàn, đảng uỷ trực thuộc Trung ương, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội. ',
        dapan4:
          'Các tỉnh uỷ, thành uỷ, các ban đảng, ban cán sự đảng, đảng đoàn, đảng uỷ trực thuộc Trung ương, Mặt trận Tổ quốc Việt Nam, các tổ chức chính trị - xã hội và Ngân hàng Chính sách xã hội.',
        ketqua: 'D',
      },
      {
        stt: '4',
        cauhoi:
          'Đơn vị nào được giao Chủ trì theo dõi, kiểm tra việc tổ chức thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với công tác tín dụng chính sách xã hội?',
        dapan1: 'Ban Kinh tế Trung ương.',
        dapan2: 'Văn phòng Trung ương Đảng.',
        dapan3: 'Mặt trận Tổ quốc Việt Nam.',
        dapan4: 'Ngân hàng Chính sách xã hội.',
        ketqua: 'A',
      },
      {
        stt: '5',
        cauhoi:
          'Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội được ban hành vào thời gian nào?',
        dapan1: 'Ngày 10/6/2014',
        dapan2: 'Ngày 22/11/2014',
        dapan3: 'Ngày 10/6/2021',
        dapan4: 'Ngày 22/6/2021',
        ketqua: 'B',
      },
      {
        stt: '6',
        cauhoi:
          'Nội dung nào sau đây không phải nhiệm vụ của Mặt trận Tổ quốc Việt Nam quy định trong Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội:',
        dapan1:
          'Phát huy vai trò tập hợp lực lượng, đẩy mạnh tuyên truyền, phổ biến các chủ trương, chính sách của Đảng và Nhà nước về tín dụng chính sách xã hội đến các tầng lớp nhân dân, nhất là người nghèo và các đối tượng chính sách khác.',
        dapan2:
          'Nâng cao hiệu quả giám sát của toàn dân đối với tín dụng chính sách xã hội.',
        dapan3:
          'Mở rộng cuộc vận động vì người nghèo để huy động sự đóng góp của các tổ chức xã hội, các doanh nghiệp và các cá nhân bổ sung nguồn vốn cho tín dụng chính sách xã hội.',
        dapan4:
          'Tăng cường kiểm tra, giám sát, đôn đốc thu hồi nợ đến hạn, hướng dẫn người vay sử dụng vốn hiệu quả.',
        ketqua: 'D',
      },
      {
        stt: '7',
        cauhoi:
          'Để tập trung nguồn lực nhằm thực hiện hiệu quả tín dụng chính sách xã hội, Chỉ thị 40-CT/TW yêu cầu cơ quan, tổ chức từ trung ương đến địa phương phải thực hiện nội dung nào dưới đây?',
        dapan1:
          'Tập trung các nguồn vốn tín dụng chính sách xã hội có nguồn gốc từ ngân sách nhà nước vào một đầu mối là Ngân hàng Chính sách xã hội.',
        dapan2:
          'Nhà nước ưu tiên bảo đảm các nguồn vốn hoạt động cho Ngân hàng Chính sách xã hội; cấp bổ sung vốn điều lệ, cấp bù chênh lệch lãi suất và phí quản lý.',
        dapan3:
          'Nâng cao trách nhiệm lãnh đạo, chỉ đạo của cấp ủy đảng, chính quyền trong việc củng cố, nâng cao chất lượng tín dụng chính sách xã hội',
        dapan4:
          'Mở rộng cuộc vận động vì người nghèo để huy động sự đóng góp của các tổ chức xã hội, các doanh nghiệp và các cá nhân bổ sung nguồn vốn cho tín dụng chính sách xã hội.',
        ketqua: 'A',
      },
      {
        stt: '8',
        cauhoi:
          'Nội dung nào sau đây không phải là nhiệm vụ của Ngân hàng Chinh sách xã hội quy định trong Kết luận số 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội',
        dapan1:
          'Nâng cao năng lực quản trị và công tác kiểm tra, kiểm soát nội bộ; tăng cường kiểm tra, giám sát đối với hoạt động tín dụng chính sách xã hội, hoạt động nhận uỷ thác của các tổ chức chính trị-xã hội và tình hình sử dụng vốn của người vay.',
        dapan2:
          'Phát triển các sản phẩm, dịch vụ hỗ trợ đem lại tiện ích cho người nghèo và các đối tượng chính sách khác. Chủ động tham mưu cho các bộ, ngành liên quan, nghiên cứu đề xuất chính sách tín đụng ưu đãi đối với người nghèo và các đối tượng chính sách khác, phù họp với từng giai đoạn.',
        dapan3:
          'Xây dựng Chiến lược phát triển Ngân hàng Chính sách xã hội giai đoạn 2021 - 2030 trình cấp có thẩm quyền phê duyệt.',
        dapan4:
          'Xây dựng, lồng ghép mô hình, chương trình, dự án phát triển kinh tế - xã hội, giảm nghèo bền vững của địa phương với việc sử dụng nguồn vốn tín dụng chính sách xã hội.',
        ketqua: 'D',
      },
      {
        stt: '9',
        cauhoi:
          'Quyết định số 401/QĐ-TTg về ban hành Kế hoạch triển khai Chỉ thị số 40-CT/TW ngày 22 tháng 11 năm 2014 của Ban Bí thư Trung ương Đảng về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội được kí ban hành vào ngày/tháng/năm nào?',
        dapan1: 'Ngày 22/03/2016',
        dapan2: 'Ngày 14/03/2016',
        dapan3: 'Ngày 22/06/2016',
        dapan4: 'Ngày 22/11/2014',
        ketqua: 'B',
      },
      {
        stt: '10',
        cauhoi:
          'Nội dung nào không phải là nội dung nhiệm vụ “Tập trung nguồn lực và hoàn thiện cơ chế, chính sách nhằm thực hiện hiệu quả tín dụng chính sách xã hội” tại Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với công tác tín dụng chính sách xã hội',
        dapan1:
          'Ưu tiên cân đối nguồn vốn ngân sách nhà nước để thực hiện các chương trình, dự án tín dụng phục vụ cho vay tiêu dùng và bảo đảm hoạt động ổn định, bền vững của Ngân hàng Chính sách xã hội.',
        dapan2:
          'Hội đồng nhân dân, Ủy ban nhân dân các cấp tiếp tục dành một phần nguồn vốn từ ngân sách địa phương để bổ sung nguồn vốn cho vay các đối tượng chính sách xã hội trên địa bàn. Hỗ trợ cơ sở vật chất, điều kiện làm việc cho Ngân hàng Chính sách xã hội. Các tỉnh, thành phố ban hành chuẩn nghèo riêng cao hơn chuẩn nghèo quốc gia cần bố trí đủ nguồn lực để cho vay các đối tượng này.',
        dapan3:
          'Mặt trận Tổ quốc mở rộng cuộc vận động vì người nghèo để huy động sự đóng góp của các tổ chức xã hội, các doanh nghiệp và các cá nhân bổ sung nguồn vốn cho tín dụng chính sách xã hội.',
        dapan4:
          'Chính phủ chỉ đạo nghiên cứu, xem xét ban hành chuẩn nghèo mới theo phương pháp tiếp cận đa chiều nhằm bảo đảm mức sống tối thiểu và tiếp cận các dịch vụ xã hội cơ bản; hoàn thiện tiêu chí phân loại và quy trình xác định đối tượng, địa bàn nghèo làm căn cứ thực hiện tín dụng chính sách xã hội.',
        ketqua: 'A',
      },
      {
        stt: '11',
        cauhoi:
          'Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với công tác tín dụng chính sách xã hội quy định đơn vị nào không có trách nhiệm lãnh đạo, chỉ đạo, tổ chức thực hiện Chỉ thị?',
        dapan1: 'Ban chỉ đạo Tây Bắc, Tây Nguyên, Tây Nam Bộ.',
        dapan2:
          'Đảng đoàn Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội.',
        dapan3: 'Ngân hàng chính sách xã hội.',
        dapan4: 'Hiệp hội kinh tế Việt Nam.',
        ketqua: 'D',
      },
      {
        stt: '12',
        cauhoi:
          'Nội dung nào không phải nhiệm vụ được nêu tại Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với công tác tín dụng chính sách xã hội?',
        dapan1:
          'Tăng cường sự lãnh đạo, chỉ đạo của các cấp ủy đảng, chính quyền đối với hoạt động tín dụng chính sách xã hội',
        dapan2:
          'Nâng cao trách nhiệm của Mặt trận Tổ quốc Việt Nam, các tổ chức chính trị - xã hội trong việc thực hiện tín dụng chính sách xã hội.',
        dapan3:
          'Duy trì các cơ chế, chính sách hiện tại nhằm thực hiện hiệu quả tín dụng chính sách xã hội.',
        dapan4:
          'Nâng cao năng lực và hiệu quả hoạt động của Ngân hàng Chính sách xã hội.',
        ketqua: 'C',
      },
      {
        stt: '13',
        cauhoi:
          'Nội dung nào không phải mục đích của Kế hoạch triển khai chỉ thị số 40-CT/TW ngày 22/11/2014 của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với công tác tín dụng chính sách xã hội (ban hành kèm theo Quyết định số 401/QĐ-TTg ngày 14/3/2016 của Thủ tướng Chính phủ?',
        dapan1:
          'Tổ chức thực hiện Chỉ thị số 40-CT/TW ngày 22 tháng 11 năm 2014 của Ban Bí thư Trung ương Đảng về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội.',
        dapan2:
          'Nâng cao nhận thức, trách nhiệm của các tổ chức, cá nhân có liên quan về vai trò, vị trí và tầm quan trọng tín dụng chính sách xã hội trong việc thực hiện có hiệu quả Chương trình mục tiêu quốc gia giảm nghèo bền vững, Chương trình xây dựng nông thôn mới.',
        dapan3:
          'Tăng cường sự chỉ đạo của các cấp chính quyền từ Trung ương đến cơ sở trong việc xây dựng cơ chế chính sách và bố trí nguồn lực cho tín dụng chính sách xã hội, tạo điều kiện để Ngân hàng Chính sách xã hội triển khai thực hiện có hiệu quả các chương trình tín dụng chính sách.',
        dapan4:
          'Phát động phong trào đóng góp sáng kiến nhằm triển khai các nội dung tại Chỉ thị số 40-CT/TW ngày 22/11/ 2014 của Ban Bí thư Trung ương Đảng vào thực tiễn đời sống.',
        ketqua: 'D',
      },
      {
        stt: '14',
        cauhoi:
          'Trong Kế hoạch ban hành kèm theo Quyết định số 401/QĐ-TTg ngày 14/3/2016 của Thủ tướng Chính phủ, nhiệm vụ “Tuyên truyền, phổ biến các chủ trương, chính sách của Đảng và Nhà nước về tín dụng chính sách xã hội đến các tầng lớp nhân dân, nhất là người nghèo và các đối tượng chính sách khác.” được phân công chính cho đơn vị nào?',
        dapan1: 'Ngân hàng Chính sách xã hội.',
        dapan2: 'Mặt trận tổ quốc Việt Nam và các tổ chức chính trị - xã hội.',
        dapan3: 'Các cơ quan của Chính phủ, chính quyền địa phương.',
        dapan4: 'Cả 3 phương án trên.',
        ketqua: 'B',
      },
      {
        stt: '15',
        cauhoi:
          'Trong Kế hoạch ban hành kèm theo Quyết định số 401/QĐ-TTg ngày 14/3/2016 của Thủ tướng Chính phủ, để “Nâng cao năng lực và hiệu quả hoạt động của Ngân hàng Chính sách xã hội”, Thủ tướng Chính phủ đã giao nhiệm vụ “Chỉ đạo, thực hiện tốt việc điều tra, xác định hộ nghèo, hộ cận nghèo làm cơ sở thực hiện chính sách tín dụng” cho đơn vị nào?',
        dapan1: 'Bộ Lao động - Thương binh và Xã hội',
        dapan2: 'Các tổ chức chính trị - xã hội',
        dapan3: 'Ủy ban nhân dân các cấp',
        dapan4: 'Ủy ban Dân tộc',
        ketqua: 'C',
      },
      {
        stt: '16',
        cauhoi:
          'Kết luận số 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội yêu cầu các tổ chức chính trị - xã hội thực hiện tốt công tác nào sau đây:',
        dapan1:
          'Thực hiện tốt công tác nhận uỷ thác của Ngân hàng Chính sách xã hội, nắm chắc tình hình sử dụng vốn của người vay.',
        dapan2:
          'Thực hiện tốt công tác vận động vì người nghèo nhằm bổ sung nguồn vốn cho Ngân hàng Chính sách xã hội.',
        dapan3:
          'Thực hiện tốt mô hình, chương trình, dự án phát triển kinh tế - xã hội, giảm nghèo bền vững của địa phương với việc sử dụng nguồn vốn tín dụng chính sách xã hội.',
        dapan4:
          'Thực hiện tốt công tác kiểm tra, giám sát đối với hoạt động tín dụng chính sách xã hội.',
        ketqua: 'A',
      },
      {
        stt: '17',
        cauhoi:
          'Trong Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, Ban Bí thư đã yêu cầu cần phải làm gì để nâng cao năng lực và hiệu quả hoạt động của Ngân hàng Chính sách xã hội?',
        dapan1:
          'Củng cố, nâng cao chất lượng hoạt động của Hội đồng quản trị và ban đại diện hội đồng quản trị các cấp. Kiện toàn tổ chức đảng phù hợp với mô hình hoạt động. Tăng cường công tác kiểm tra, kiểm soát nội bộ. Chú trọng đào tạo, bồi dưỡng nâng cao năng lực chuyên môn, đạo đức nghề nghiệp và chăm lo đời sống vật chất, tinh thần cho cán bộ Ngân hàng Chính sách xã hội.',
        dapan2:
          'Củng cố, nâng cao chất lượng hoạt động của Hội đồng quản trị và và mối liên hệ công tác với hội đoàn thể các cấp. Kiện toàn tổ chức đảng phù hợp với mô hình hoạt động. Tăng cường công tác kiểm tra, kiểm soát nội bộ. Chú trọng đào tạo, bồi dưỡng nâng cao năng lực chuyên môn, đạo đức nghề nghiệp và chăm lo đời sống vật chất, tinh thần cho cán bộ Ngân hàng Chính sách xã hội.',
        dapan3:
          'Củng cố, nâng cao chất lượng hoạt động của Hội đồng quản trị. Kiện toàn tổ chức đảng phù hợp với mô hình hoạt động. Tăng cường công tác kiểm tra, kiểm soát nội bộ. Chú trọng đào tạo, bồi dưỡng nâng cao năng lực chuyên môn, đạo đức nghề nghiệp và chăm lo đời sống vật chất, tinh thần cho cán bộ Ngân hàng Chính sách xã hội.',
        dapan4:
          'Củng cố, nâng cao chất lượng hoạt động của Hội đồng quản trị và ban đại diện hội đồng quản trị các cấp. Kiện toàn tổ chức đảng phù hợp với mô hình hoạt động. Tăng cường công tác kiểm tra, kiểm soát nội bộ. Chú trọng đào tạo, bồi dưỡng nâng cao năng lực chuyên môn, đạo đức nghề nghiệp trong việc thực hiện hoạt động tín dụng chính sách xã hội.',
        ketqua: 'A',
      },
      {
        stt: '18',
        cauhoi:
          'Trong Kế hoạch ban hành kèm theo Quyết định số 401/QĐ-TTg ngày 14/3/2016 của Thủ tướng Chính phủ, Ngân hàng Nhà nước cần thực hiện nhiệm vụ gì để “Nâng cao năng lực và hiệu quả hoạt động của Ngân hàng Chính sách xã hội”:',
        dapan1:
          'Thường xuyên đôn đốc, yêu cầu các tổ chức tín dụng Nhà nước duy trì số dư tiền gửi tại Ngân hàng Chính sách xã hội theo quy định. Tiếp tục đàm phán, ký kết các dự án tín dụng, các nguồn tài trợ cho công tác giảm nghèo từ các tổ chức quốc tế để bổ sung nguồn vốn và tăng cường năng lực hoạt động cho Ngân hàng Chính sách xã hội.',
        dapan2:
          'Cân đối đủ nguồn vốn ngân sách Nhà nước để thực hiện các chương trình, dự án tín dụng chính sách xã hội đã được ban hành; bảo đảm nguồn vốn hoạt động cho Ngân hàng Chính sách xã hội hằng năm theo quy định; cho vay các nguồn vốn ưu đãi thời hạn dài, lãi suất thấp để cải thiện cơ cấu nguồn vốn theo hướng ổn định, bền vững.',
        dapan3:
          'Nghiên cứu, hoàn thiện cơ chế chính sách về quản lý tài chính, nguồn vốn theo hướng tăng tính chủ động và đảm bảo hiệu quả cho hoạt động của Ngân hàng Chính sách xã hội.',
        dapan4:
          'Phối hợp với Bộ Kế hoạch và Đầu tư, Bộ Tài chính trong việc tham mưu, đề xuất Thủ tướng Chính phủ cân đối, bố trí cấp vốn kịp thời thực hiện các chương trình tín dụng chính sách đối với vùng dân tộc thiểu số và miền núi.',
        ketqua: 'A',
      },
      {
        stt: '19',
        cauhoi:
          'Kết luận số 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, Ban Bí thư yêu cầu các cấp ủy, chính quyền cần xác định công tác tín dụng chính sách xà hội là một trong những nhiệm vụ gì trong triển khai kế hoạch phát triển kinh tế - xã hội 5 năm 2021 - 2025 và chiến lược phát triển kinh tế - xã hội 10 năm 2021 - 2030, góp phần thực hiện thắng lợi Nghị quyết Đại hội XIII của Đảng?',
        dapan1: 'Nhiệm vụ hàng đầu',
        dapan2: 'Nhiệm vụ trọng tâm',
        dapan3: 'Nhiệm vụ tiên quyết',
        dapan4: 'Nhiệm vụ thường xuyên',
        ketqua: 'B',
      },
      {
        stt: '20',
        cauhoi:
          'Trong nhiệm vụ “Tập trung nguồn lực và hoàn thiện cơ chế, chính sách nhằm thực hiện hiệu quả tín dụng chính sách xã hội” tại Chỉ thị số 40-CT/TW ngày 22/11/2014 của Ban Bí thư, Hội đồng nhân dân, Ủy ban nhân dân các cấp tiếp tục làm gì?',
        dapan1:
          'Hội đồng nhân dân, Ủy ban nhân dân các cấp tiếp tục dành một phần nguồn vốn từ ngân sách địa phương để bổ sung nguồn vốn cho vay các đối tượng chính sách xã hội trên địa bàn.',
        dapan2:
          'Hội đồng nhân dân, Ủy ban nhân dân các cấp tiếp tục dành một phần Quỹ phúc lợi tại địa phương để bổ sung nguồn vốn cho vay các đối tượng chính sách xã hội trên địa bàn.',
        dapan3:
          'Hội đồng nhân dân, Ủy ban nhân dân các cấp tiếp tục vận động các tổ chức trên địa bàn đóng góp phương để bổ sung nguồn vốn cho vay các đối tượng chính sách xã hội trên địa bàn.',
        dapan4:
          'Hội đồng nhân dân, Ủy ban nhân dân các cấp tiếp tục dành toàn bộ nguồn vốn từ ngân sách địa phương để bổ sung nguồn vốn cho vay các đối tượng chính sách xã hội trên địa bàn.',
        ketqua: 'A',
      },
      {
        stt: '21',
        cauhoi:
          'Nội dung nào không phải là tồn tại trong quá trình thực hiện Chỉ thị 40 mà Kết luận 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội đã nêu ra:',
        dapan1:
          'Một số cấp ủy, chính quyền chưa quan tâm đúng mức đến hoạt động tín dụng chính sách xã hôi; một số nhiệm vụ đề ra chưa được thực hiện đầy đủ, kịp thời và triệt để.',
        dapan2:
          'Việc bố trí nguồn vốn từ Kho bạc Nhà nước sang Ngân hàng Chính sách xã hội thực hiện chương trình tín dụng chính sách xã hội chưa kịp thời, chưa đáp ứng yêu cầu.',
        dapan3:
          'Chất lượng tín dụng tuy đã được nâng cao, nhưng chưa đồng đều giữa các vùng, địa phương; thiếu cơ chế cụ thể lồng ghép, phối hợp hiệu quả giữa các chương trình, dự án kinh tế - xã hội với tín dụng chính sách xã hội.',
        dapan4:
          'Năng lực, trách nhiệm của một số tổ chức nhận uỷ thác của Ngân hàng Chính sách xã hội tại cơ sở còn hạn chế. Công tác phối hợp giữa các cấp, các ngành, Mặt trận Tổ quốc, các tổ chức chính trị - xã hội trong việc tuyên truyền, phổ biến và tổ chức thực hiện tín dụng chính sách xã hội có lúc, có nơi chưa thật chặt chẽ, hiệu quả.',
        ketqua: 'B',
      },
      {
        stt: '22',
        cauhoi:
          'Kết luận 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội đã yêu cầu cần tạo điều kiện gì cho Ngân hàng Chính sách xã hội:',
        dapan1:
          'Tạo điều kiện cho Ngân hàng Chính sách xã hội mở rộng huy động nguồn lực từ các cá nhân, tổ chức và xã hội; từng bước mở rộng đối tượng chính sách xã hội được vay vốn, nâng mức cho vay, thời hạn cho vay phù hợp với mục tiêu các chương trình mục tiêu quốc gia và mục tiêu phát triển kinh tế - xã hội đất nước.',
        dapan2:
          'Tạo điều kiện cho Ngân hàng Chính sách xã hội nâng lãi suất cho vay và thời hạn cho vay phù hợp với mục tiêu các chương trình mục tiêu quốc gia và mục tiêu phát triển kinh tế - xã hội đất nước.',
        dapan3:
          'Tạo điều kiện cho Ngân hàng Chính sách xã hội mở rộng hoạt động theo hướng thương mại; từng bước mở rộng đối tượng được vay vốn, nâng mức cho vay, thời hạn cho vay phù hợp với mục tiêu các chương trình mục tiêu quốc gia và mục tiêu phát triển kinh tế - xã hội đất nước.',
        dapan4:
          'Tạo điều kiện cho Ngân hàng Chính sách xã hội mở rộng huy động nguồn lực từ các cá nhân, tổ chức và xã hội; từng bước mở rộng đối tượng chính sách xã hội được vay vốn, nâng mức cho vay, thời hạn cho vay phù hợp với mục tiêu tối đa hóa lợi nhuận.',
        ketqua: 'A',
      },
      {
        stt: '23',
        cauhoi:
          'Kết luận 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội đã xác định nội dung, nhiệm vụ, bố trí đủ, kịp thời nguồn tài chính tín dụng chính sách xã hội theo hướng nào:',
        dapan1:
          'Tích hợp các chương trình tín dụng chính sách xã hội trong quyết định đầu tư công, các chương trình mục tiêu quốc gia và các chương trình cho vay tiêu dùng, dự án kinh doanh khác trong kế hoạch phát triển kinh tế - xã hội giai đoạn 2021 – 2050.',
        dapan2:
          'Tích hợp các chương trình tín dụng chính sách xã hội trong quyết định đầu tư công, các chương trình mục tiêu quốc gia và các chương trình, dự án khác trong kế hoạch phát triển kinh tế - xã hội giai đoạn 2021 - 2030.',
        dapan3:
          'Tích hợp các chương trình tín dụng chính sách xã hội trong quyết định đầu tư công, các chương trình mục tiêu quốc gia và các chương trình cho vay tiêu dùng, dự án kinh doanh khác trong kế hoạch phát triển kinh tế - xã hội giai đoạn 2021 - 2030.',
        dapan4:
          'Tích hợp các chương trình tín dụng chính sách xã hội trong quyết định đầu tư công, các chương trình mục tiêu quốc gia và các chương trình, dự án khác trong kế hoạch phát triển kinh tế - xã hội giai đoạn 2021 - 2050.',
        ketqua: 'B',
      },
      {
        stt: '24',
        cauhoi:
          'Kết luận 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội không yêu cầu tập trung các nguồn vốn nào vào Ngân hàng Chính sách xã hội:',
        dapan1: 'Các nguồn vốn hợp pháp khác.',
        dapan2:
          'Nguồn vốn tín dụng chính sách xã hội có nguồn gốc từ ngân sách nhà nước.',
        dapan3: 'Nguồn vốn có nguồn gốc từ các tổ chức tài chính Quốc tế.',
        dapan4: 'Nguồn vốn có tính chất từ thiện.',
        ketqua: 'C',
      },
      {
        stt: '25',
        cauhoi:
          'Kết luận 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội yêu cầu đơn vị nào phối hợp chặt chẽ với Ngân hàng Chính sách xã hội trong quản lý, nâng cao hiệu quả tín dụng chính sách xã hội:',
        dapan1: 'Các ngành, Mặt trận Tổ quốc, các tổ chức chính trị - xã hội.',
        dapan2:
          'Ủy ban Dân tộc, Mặt trận Tổ quốc, các tổ chức chính trị - xã hội.',
        dapan3:
          'Các ngành, Mặt trận Tổ quốc, các tổ chức chính trị - xã hội và Bộ Kế hoạch và Đầu tư.',
        dapan4:
          'Bộ Tài chính, Mặt trận Tổ quốc và các tổ chức chính trị - xã hội.',
        ketqua: 'A',
      },
      {
        stt: '26',
        cauhoi:
          'Nội dung nào sau đây không phải nhiệm vụ của các tổ chức chính trị - xã hội quy định trong Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội:',
        dapan1:
          'Phát huy vai trò tập hợp lực lượng, đẩy mạnh tuyên truyền, phổ biến các chủ trương, chính sách của Đảng và Nhà nước về tín dụng chính sách xã hội đến các tầng lớp nhân dân, nhất là người nghèo và các đối tượng chính sách khác; nâng cao hiệu quả giám sát của toàn dân đối với công tác này.',
        dapan2:
          'Thực hiện đầy đủ các nội dung được ủy thác; phối hợp chặt chẽ với Ngân hàng Chính sách xã hội và chính quyền địa phương trong việc củng cố, nâng cao chất lượng hoạt động tín dụng chính sách xã hội; hướng dẫn bình xét đối tượng vay vốn; tăng cường kiểm tra, giám sát, đôn đốc thu hồi nợ đến hạn, hướng dẫn người vay sử dụng vốn hiệu quả; lồng ghép với các chương trình, dự án của các tổ chức chính trị - xã hội. ',
        dapan3:
          'Làm tốt công tác tư vấn, hướng dẫn xây dựng và nhân rộng các mô hình sản xuất, kinh doanh điển hình, giúp nhau vươn lên thoát nghèo và làm giàu.',
        dapan4:
          'Mở rộng cuộc vận động vì người nghèo để huy động sự đóng góp của các tổ chức xã hội, các doanh nghiệp và các cá nhân bổ sung nguồn vốn cho tín dụng chính sách xã hội.',
        ketqua: 'D',
      },
      {
        stt: '27',
        cauhoi:
          'Kết luận số 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, Ban Bí thư yêu cầu nâng cao vai trò, trách nhiệm của các cấp uỷ, chính quyền địa phương lãnh đạo, chỉ đạo hoạt động tín dụng chính sách xã hội; xác định đây là một nội dung công tác nào dưới đây của  cấp uỷ, chính quyền các cấp:',
        dapan1: 'Công tác đổi mới',
        dapan2: 'Công tác dân vận',
        dapan3: 'Công tác hàng đầu',
        dapan4: 'Công tác thường xuyên',
        ketqua: 'D',
      },
      {
        stt: '28',
        cauhoi:
          'Kết luận số 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, Ban Bí thư đã yêu cầu Ngân hàng Chính sách xã hội cần tăng cường công tác gì?',
        dapan1: 'Tăng cường năng lực quản trị và công tác kiểm tra',
        dapan2: 'Tăng cường công tác phát triển các sản phẩm, dịch vụ hỗ trợ',
        dapan3: 'Tăng cường công tác huy động, quản lý và sử dụng vốn hiệu quả',
        dapan4:
          'Tăng cường công tác đào tạo cán bộ, kiện toàn, bồi dưỡng nhân sự của hệ thống Ngân hàng Chính sách xã hội',
        ketqua: 'D',
      },
      {
        stt: '29',
        cauhoi:
          'Kết luận số 06-KL/TW ngày 10/6/2021, Ban Bí thư yêu cầu những đơn vị nào sau đây thực hiện tốt những nhiệm vụ, giải pháp trọng tâm nhằm thực hiện có hiệu quả Chỉ thị số 40-CT/TW:',
        dapan1: 'Cấp ủy, tổ chức Đảng.',
        dapan2: 'Cấp ủy, tổ chức Đảng, chính quyền',
        dapan3: 'Cấp ủy, tổ chức Đảng, chính quyền, Mặt trận tổ quốc.',
        dapan4:
          'Cấp ủy, tổ chức Đảng, chính quyền, Mặt trận tổ quốc Việt Nam, tổ chức chính trị - xã hội các cấp',
        ketqua: 'D',
      },
      {
        stt: '30',
        cauhoi:
          'Trong Kế hoạch ban hành kèm theo Quyết định số 401/QĐ-TTg ngày 14/3/2016 của Thủ tướng Chính phủ: Bộ Kế hoạch và Đầu tư, Bộ Tài chính cần thực hiện nhiệm vụ gì để “Nâng cao năng lực và hiệu quả hoạt động của Ngân hàng Chính sách xã hội”:',
        dapan1:
          'Tiếp tục tập trung các nguồn vốn tín dụng chính sách xã hội có nguồn gốc từ huy động các nguồn lực trong xã hội vào đầu mối là Ngân hàng Chính sách xã hội để cho vay người nghèo và các đối tượng chính sách theo quy định.',
        dapan2:
          'Dành một phần nguồn vốn từ ngân sách địa phương ủy thác qua Ngân hàng Chính sách xã hội để bổ sung nguồn vốn cho vay người nghèo và các đối tượng chính sách xã hội trên địa bàn; hỗ trợ cơ sở vật chất, điều kiện làm việc cho Ngân hàng Chính sách xã hội.',
        dapan3:
          'Cân đối đủ nguồn vốn ngân sách Nhà nước để thực hiện các chương trình, dự án tín dụng chính sách xã hội đã được ban hành; bảo đảm nguồn vốn hoạt động cho Ngân hàng Chính sách xã hội hằng năm theo quy định; cho vay các nguồn vốn ưu đãi thời hạn dài, lãi suất thấp để cải thiện cơ cấu nguồn vốn theo hướng ổn định, bền vững.',
        dapan4:
          'Tiếp tục đàm phán, ký kết các dự án tín dụng, các nguồn tài trợ cho công tác giảm nghèo từ các tổ chức quốc tế để bổ sung nguồn vốn và tăng cường năng lực hoạt động cho Ngân hàng Chính sách xã hội.',
        ketqua: 'C',
      },
      {
        stt: '31',
        cauhoi:
          'Chỉ thị 40-CT/TW ngày 22/11/2014 được  Ban Bí thư Trung ương Đảng khóa mấy ban hành?',
        dapan1: 'Khóa X',
        dapan2: 'Khóa XI',
        dapan3: 'Khóa XII',
        dapan4: 'Khóa XIII',
        ketqua: 'B',
      },
      {
        stt: '32',
        cauhoi:
          'Chỉ thị 40-CT/TW  của  Ban Bí thư Trung ương Đảng được ban hành ngày tháng năm nào?',
        dapan1: '20/11/2014',
        dapan2: '21/11/2014',
        dapan3: '22/11/2014',
        dapan4: '23/11/2014',
        ketqua: 'C',
      },
      {
        stt: '33',
        cauhoi:
          'Theo chỉ thị số 40-CT/TW ngày 22/11/2014 của Ban Bí thư, một trong những nội dung về tăng cường sự lãnh đạo, chỉ đạo của các cấp ủy Đảng, chính quyền đối với hoạt động tín dụng chính sách xã hội là?',
        dapan1:
          'Xác định nhiệm vụ lãnh đạo, chỉ đạo đối với hoạt động tín dụng chính sách xã hội là một trong những nhiệm vụ trong chương trình và kế hoạch hoạt động theo định kỳ của các cấp ủy, các ngành, địa phương và đơn vị',
        dapan2:
          'Xác định nhiệm vụ lãnh đạo, chỉ đạo đối với hoạt động tín dụng chính sách xã hội là một trong những nhiệm vụ trong chương trình và kế hoạch hoạt động theo quý của các cấp ủy, các ngành, địa phương và đơn vị',
        dapan3:
          'Xác định nhiệm vụ lãnh đạo, chỉ đạo đối với hoạt động tín dụng chính sách xã hội là một trong những nhiệm vụ trong chương trình và kế hoạch, hoạt động thường xuyên của các cấp ủy, các ngành, địa phương và đơn vị',
        dapan4:
          'Xác định nhiệm vụ lãnh đạo, chỉ đạo đối với hoạt động tín dụng chính sách xã hội là một trong những nhiệm vụ trong chương trình và kế hoạch hoạt động theo nhiệm kỳ của các cấp ủy, các ngành, địa phương và đơn vị',
        ketqua: 'C',
      },
      {
        stt: '34',
        cauhoi:
          'Một trong những nội dung về tăng cường sự lãnh đạo, chỉ đạo của các cấp ủy Đảng, chính quyền đối với hoạt động tín dụng chính sách xã hội đã được chỉ đạo trong Chỉ thị số 40-CT/TW ngày 22/11/2014 của Ban Bí thư, là:',
        dapan1:
          'Tổ chức thực hiện tốt chủ trương huy động các nguồn lực cho tín dụng chính sách gắn với phát triển nông nghiệp, nông thôn; giảm nghèo bền vững, tháo gỡ khó khăn cho sản xuất kinh doanh; hạn chế tín dụng đen; chương trình mục tiêu quốc gia xây dựng nông thôn mới.',
        dapan2:
          'Tổ chức thực hiện tốt chủ trương huy động các nguồn lực cho tín dụng chính sách gắn với phát triển giáo dục, dạy nghề, tạo việc làm.',
        dapan3:
          'Tổ chức thực hiện tốt chủ trương huy động các nguồn lực cho tín dụng chính sách gắn với phát triển nông nghiệp, nông thôn, phát triển giáo dục, dạy nghề, tạo việc làm.',
        dapan4:
          'Tổ chức thực hiện tốt chủ trương huy động các nguồn lực cho tín dụng chính sách gắn với phát triển nông nghiệp, nông thôn, phát triển giáo dục, dạy nghề, tạo việc làm, bảo đảm an sinh xã hội  và giảm nghèo bền vững.',
        ketqua: 'D',
      },
      {
        stt: '35',
        cauhoi:
          'Theo Chỉ thị 40-CT/TW ngày 22/11/2014 của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, nội dung nào dưới đây không thuộc trách nhiệm của Mặt trận Tổ quốc Việt Nam:',
        dapan1: 'Vận động, tập hợp đối tượng và hướng dẫn bình xét vay vốn.',
        dapan2:
          'Phát huy vai trò tập hợp lực lượng, đẩy mạnh tuyên truyền, phổ biến các chủ trương, chính sách của Đảng và Nhà nước về chính sách tín dụng xã hội',
        dapan3:
          'Nâng cao hiệu quả giám sát của toàn dân đối với công tác phát huy vai trò tập hợp lực lượng, đẩy mạnh tuyên tuyên truyền, phổ biến các chủ trương, chính sách của Đảng và Nhà nước về chính sách tín dụng xã hội.',
        dapan4: 'Không có đáp án nào đúng.',
        ketqua: 'A',
      },
      {
        stt: '36',
        cauhoi:
          'Theo Kết luận 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị 40-CT/TW về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, nhiệm vụ nào sau đây của Măt trận tổ quốc Việt Nam và các tổ chức chính trị-xã hội cần tập trung thực hiện:',
        dapan1:
          'Thực hiện tốt chức năng giám sát, phản biện xã hội đối với hoạt động tín dụng chính sách xã hội.',
        dapan2: 'Thực hiện tốt công tác nhận ủy thác của NHCSXH.',
        dapan3:
          'Tiếp tục triển khai, mở rộng cuộc vận động vì người nghèo nhằm bổ sung nguồn vốn cho NHCSXH thực hiện các chương trình tín dụng chính sách xã hội.',
        dapan4: 'Tất cả các phương án trên.',
        ketqua: 'D',
      },
      {
        stt: '37',
        cauhoi:
          'Chỉ thị số 40-CT/TW ngày 22/11/2014 của Ban Bí thư chỉ đạo cơ quan, tổ chức nào thực hiện nhiệm vụ “ Mở rộng cuộc vận động vì người nghèo để huy động sự đóng góp của các tổ chức xã hội, các doanh nghiệp và các cá nhân bổ sung nguồn vốn cho tín dụng chính sách xã hội”?',
        dapan1: 'Hội đồng nhân dân các cấp',
        dapan2: 'Ủy ban nhân dân các cấp',
        dapan3: 'Mặt trận Tổ quốc',
        dapan4: 'Tất cả các phương án trên',
        ketqua: 'C',
      },
      {
        stt: '38',
        cauhoi:
          'Nội dung nào trong chỉ thị 40-CT/TW được đề cập về nâng cao năng lực và hiệu quả hoạt động của Ngân hàng Chính sách xã hội?',
        dapan1:
          'Nâng cao hiệu quả phương thức ủy thác cho các tổ chức chính trị - xã hội và các Tổ tiết kiệm và vay vốn; tăng cường hoạt động tại các điểm giao dịch cấp xã;',
        dapan2:
          'Nâng cao hiệu quả phương thức ủy thác cho các tổ chức chính trị - xã hội; tăng cường hoạt động tại các điểm giao dịch cấp xã; phát triển sản phẩm, dịch vụ hỗ trợ đem lại tiện ích cho người nghèo và các đối tượng chính sách khác.',
        dapan3:
          'Nâng cao hiệu quả phương thức ủy thác cho các tổ chức chính trị - xã hội và công tác phối hợp với các ngành khuyến lâm khuyến ngư; tăng cường hoạt động tại các điểm giao dịch cấp xã;',
        dapan4:
          'Nâng cao hiệu quả phương thức ủy thác cho các tổ chức chính trị - xã hội và các Tổ tiết kiệm và vay vốn.',
        ketqua: 'B',
      },
      {
        stt: '39',
        cauhoi:
          'Kết luận số 06-KL/TW ngày 10/6/2021của Ban Bí thư đã yêu cầu Ngân hàng Chính sách xã hội phải thực hiện nội dung nào dưới đây?',
        dapan1:
          'Tiếp tục triển khai thực hiện có hiệu qua mô hình tổ chức và phương thức quản lý tín dụng chính sách xã hội đặc thù.',
        dapan2:
          'Nâng cao năng lực quản trị và công tác kiểm tra, kiểm soát nội bộ',
        dapan3:
          'Chủ động tham mưu cho các bộ, ngành liên quan, nghiên cứu đề xuất chính sách tín dụng ưu đãi đối với người nghèo và các đối tượng chính sách khác, phù hợp với từng giai đoạn.',
        dapan4: 'Tất cả các phương án trên',
        ketqua: 'D',
      },
      {
        stt: '40',
        cauhoi:
          'Theo Kết luận 06-KL/TW ngày 10/6/2021 của Ban Bí thư về tiếp tục thực hiện Chỉ thị 40-CT/TW về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, nội dung nào sau đây không thuộc trách nhiệm của các tổ chức chính trị - xã hội?',
        dapan1: 'Hướng dẫn bình xét đối tượng vay vốn.',
        dapan2:
          'Tăng cường kiểm tra, giám sát, đôn đốc, thu hồi nợ đến hạn, hướng dẫn người vay sử dụng vốn hiệu quả',
        dapan3:
          'Phối hợp với NHCSXH phát triển các sản phẩm, dịch vụ tiện ích cho người nghèo và các đối tượng chính sách khác',
        dapan4:
          'Làm tốt công tác tư vấn, hướng dẫn xây dựng và nhân rộng các mô hình sản xuất, kinh doanh điển hình. ',
        ketqua: 'C',
      },
      {
        stt: 'PHẦN 3: CÂU HỎI NGHIỆP VỤ ỦY THÁC (80 CÂU)',
      },
      {
        stt: '1',
        cauhoi:
          'NHCSXH và các tổ chức chính trị - xã hội thực hiện ký ủy thác cho vay hộ nghèo và các đối tượng chính sách khác dựa trên cơ sở nào? ',
        dapan1: 'Điều 5 Nghị định 78/2002/NĐ-CP ngày 04/10/2002 của Chính phủ.',
        dapan2: 'Luật các tổ chức tín dụng.',
        dapan3: 'Quy định của Chủ tịch Hội đồng quản trị NHCSXH.',
        dapan4: 'Quy định của Thống đốc Ngân hàng Nhà nước Việt Nam.',
        ketqua: 'A',
      },
      {
        stt: '2',
        cauhoi:
          'NHCSXH ủy thác cho các tổ chức chính trị - xã hội thực hiện các nội dung công việc nào? ',
        dapan1: 'Công tác tuyên truyền, vận động. ',
        dapan2:
          'Kiểm tra, giám sát hoạt động của Tổ TK&VV, Ban Quản lý Tổ và tổ viên Tổ TK&VV. ',
        dapan3: 'Các hoạt động phối hợp thực hiện cùng NHCSXH.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '3',
        cauhoi:
          'Theo Hợp đồng ủy thác, tổ chức chính trị - xã hội cấp xã  tham gia tổ chức nào? ',
        dapan1: ' Ban giảm nghèo của xã',
        dapan2: 'Tổ đôn đốc thu hồi nợ khó đòi cấp xã (nếu có).',
        dapan3: 'Thành viên Ban đại diện Hội đồng quản trị NHCSXH cấp huyện',
        dapan4: 'Ban quản lý Tổ TK&VV.',
        ketqua: 'B',
      },
      {
        stt: '4',
        cauhoi:
          'Công việc nào sau đây không có trong nội dung công việc mà NHCSXH ủy thác cho các tổ chức chính trị - xã hội thực hiện? ',
        dapan1:
          'Vận động, đôn đốc Ban quản lý Tổ TK&VV tham dự đầy đủ các phiên giao dịch của NHCSXH; ',
        dapan2: 'Hướng dẫn tổ viên Tổ TK&VV thực hiện giao dịch với NHCSXH.',
        dapan3: 'Thu tiền gốc, thu tiền lãi và thu tiền gửi của người vay. ',
        dapan4: 'Tổ chức tập huấn nghiệp vụ ủy thác cho Ban quản lý Tổ TK&VV.',
        ketqua: 'C',
      },
      {
        stt: '5',
        cauhoi:
          'Theo văn bản thỏa thuận, một trong những công việc NHCSXH ủy thác cho các tổ chức chính trị - xã hội cấp xã thực hiện là gì? ',
        dapan1: 'Giải ngân cho vay đến từng hộ vay.',
        dapan2:
          'Kiểm tra việc sử dụng vốn vay của 100% các món vay mới trong vòng 30 ngày kể từ ngày NHCSXH giải ngân cho hộ vay.',
        dapan3: 'Thu nợ, lãi của hộ vay.',
        dapan4: 'Đối chiếu nợ vay đến hộ.',
        ketqua: 'B',
      },
      {
        stt: '6',
        cauhoi:
          'Theo Văn bản thỏa thuận,  phương pháp tính và thanh toán phí uỷ thác cho các tổ chức chính trị - xã hội dựa trên cơ sở nào?',
        dapan1:
          'Mức phí ủy thác quy định trong từng thời kỳ; tổng số dư nợ làm ủy thác của tổ chức chính trị - xã hội; tỷ lệ phí ủy thác theo chất lượng dư nợ.',
        dapan2:
          'Mức phí ủy thác quy định trong từng thời kỳ; số tiền lãi NHCSXH thực thu của người vay là tổ viên các Tổ TK&VV do tổ chức chính trị - xã hội quản lý; tỷ lệ phí ủy thác theo tỷ lệ hoàn thành kế hoạch thu lãi.',
        dapan3:
          'Mức phí ủy thác quy định trong từng thời kỳ; số tiền lãi NHCSXH thực thu của người vay là tổ viên các Tổ TK&VV do tổ chức chính trị - xã hội quản lý; tỷ lệ phí ủy thác theo chất lượng dư nợ.',
        dapan4:
          'Mức phí ủy thác quy định trong từng thời kỳ; số tiền lãi trong hạn NHCSXH thực thu của người vay là tổ viên các Tổ TK&VV do tổ chức chính trị - xã hội quản lý; tỷ lệ phí ủy thác theo chất lượng dư nợ.',
        ketqua: 'C',
      },
      {
        stt: '7',
        cauhoi:
          'Dư nợ do tổ chức chính trị - xã hội nhận ủy thác cho vay với NHCSXH có tỷ lệ nợ quá hạn dưới 2%, thì tổ chức chính trị - xã hội đó được hưởng tỷ lệ phí uỷ thác là bao nhiêu? ',
        dapan1: '100% mức phí uỷ thác.',
        dapan2: '80% mức phí uỷ thác.',
        dapan3: '70% mức phí uỷ thác.',
        dapan4: '50% mức phí uỷ thác.',
        ketqua: 'A',
      },
      {
        stt: '8',
        cauhoi:
          'Dư nợ do tổ chức chính trị - xã hội nhận ủy thác cho vay với NHCSXH có tỷ lệ nợ quá hạn từ 2% đến dưới 3%, thì tổ chức chính trị - xã hội đó được hưởng tỷ lệ phí uỷ thác là bao nhiêu?',
        dapan1: '100% mức phí uỷ thác.',
        dapan2: '80% mức phí uỷ thác.',
        dapan3: '70% mức phí uỷ thác.',
        dapan4: '50% mức phí uỷ thác.',
        ketqua: 'B',
      },
      {
        stt: '9',
        cauhoi:
          'Theo Hợp đồng ủy thác ký với NHCSXH, tổ chức chính trị - xã hội cấp xã có quyền lợi gì? ',
        dapan1: 'Được hưởng tiền phí ủy thác theo quy định.',
        dapan2:
          'Được NHCSXH cung cấp các loại giấy tờ, biểu mẫu liên quan đến hoạt động ủy thác; từ chối yêu cầu của NHCSXH  trái với nội dung đã thỏa thuận tại Hợp đồng.',
        dapan3:
          'Đề xuất, kiến nghị sửa đổi, bổ sung chính sách tín dụng đối với hộ nghèo và các đối tượng chính sách khác.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '10',
        cauhoi:
          'Dư nợ do tổ chức chính trị - xã hội nhận ủy thác cho vay với NHCSXH có tỷ lệ nợ quá hạn từ 3% đến dưới 4% thì tổ chức chính trị - xã hội đó được hưởng tỷ lệ phí uỷ thác là bao nhiêu? ',
        dapan1: '100% mức phí uỷ thác.',
        dapan2: '80% mức phí uỷ thác.',
        dapan3: '50% mức phí uỷ thác; ',
        dapan4: '0% mức phí uỷ thác.',
        ketqua: 'C',
      },
      {
        stt: '11',
        cauhoi:
          'Theo Văn bản thỏa thuận, nguyên tắc trả phí ủy thác cho các tổ chức chính trị - xã hội nhận ủy thác cho vay với NHCSXH được thực hiện trên cơ sở nào?',
        dapan1:
          'Trên cơ sở quy định của của Thủ tướng Chính phủ, Bộ Kế hoạch và Đầu tư, Bộ Tài chính từng thời kỳ và gắn với kết quả thực hiện công việc ủy thác và chất lượng tín dụng.',
        dapan2:
          'Trên cơ sở quy định của Thủ tướng Chính phủ, Bộ Tài chính từng thời kỳ và gắn với kết quả thực hiện công việc ủy thác và chất lượng tín dụng.',
        dapan3:
          'Trên cơ sở quy định của của Thủ tướng Chính phủ, Ngân hàng Nhà nước Việt Nam từng thời kỳ và gắn với kết quả thực hiện công việc ủy thác và chất lượng tín dụng.',
        dapan4:
          'Trên cơ sở quy định của của Thủ tướng Chính phủ từng thời kỳ và gắn với kết quả thực hiện công việc ủy thác và chất lượng tín dụng.',
        ketqua: 'B',
      },
      {
        stt: '12',
        cauhoi:
          'Dư nợ do tổ chức chính trị - xã hội nhận ủy thác cho vay với NHCSXH có tỷ lệ nợ quá hạn từ 4% trở lên thì tổ chức chính trị - xã hội đó được hưởng mức phí uỷ thác là bao nhiêu?',
        dapan1: '50% mức phí uỷ thác.',
        dapan2: '40% mức phí uỷ thác.',
        dapan3: '30% mức phí uỷ thác.',
        dapan4: '0% mức phí uỷ thác.',
        ketqua: 'D',
      },
      {
        stt: '13',
        cauhoi:
          'Theo Văn bản thỏa thuận, hoạt động nào nằm trong các hoạt động phối hợp giữa NHCSXH và các tổ chức chính trị - xã hội?',
        dapan1:
          'Nhận và thông báo kết quả phê duyệt Danh sách hộ gia đình được vay vốn cho Tổ TK&VV để Tổ thông báo đến từng hộ gia đình.',
        dapan2:
          'Thực hiện đánh giá, phân loại chất lượng hoạt động của Tổ TK&VV.',
        dapan3:
          'Thực hiện các giải pháp củng cố, kiện toàn hoạt động của các Tổ TK&VV.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '14',
        cauhoi:
          'Mức phí ủy thác NHCSXH chi trả cho các tổ chức chính trị - xã hội là bao nhiêu?',
        dapan1: '0,053%/tháng tính trên dư nợ có thu được lãi.',
        dapan2: '0,043%/tháng tính trên tổng lãi thực thu.',
        dapan3: '0,032%/tháng tính trên dư nợ có thu được lãi.',
        dapan4: '0,023%/ tháng tính trên dư nợ có thu được lãi.',
        ketqua: 'C',
      },
      {
        stt: '15',
        cauhoi:
          'Quyền của NHCSXH nêu trong Hợp đồng ủy thác ký với tổ chức chính trị - xã hội cấp xã được quy định như thế nào?',
        dapan1:
          'Kiểm tra, giám sát quá trình thực hiện ủy thác cho vay của Bên nhận ủy thác.',
        dapan2: 'Yêu cầu Bên nhận ủy thác thực hiện đầy đủ nội dung Hợp đồng.',
        dapan3:
          'Đơn phương đình chỉ việc thực hiện Hợp đồng nếu Bên nhận ủy thác vi phạm nội dung Hợp đồng.',
        dapan4: 'Tất cả ác đáp án trên',
        ketqua: 'D',
      },
      {
        stt: '16',
        cauhoi:
          'Mức phí ủy thác NHCSXH chi trả cho các tổ chức chính trị - xã hội cấp xã đối với chương trình cho vay nhà ở xã hội là bao nhiêu? ',
        dapan1: '0,005%/dư nợ trong hạn/tháng.',
        dapan2: '0,004%/dư nợ trong hạn/tháng.',
        dapan3: '0,003%/dư nợ trong hạn/tháng.',
        dapan4: '0,023%/dư nợ trong hạn/tháng.',
        ketqua: 'C',
      },
      {
        stt: '17',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội cấp tỉnh được phân bổ mức phí ủy thác là bao nhiêu? ',
        dapan1: '3,5%',
        dapan2: '4%',
        dapan3: '4,5%',
        dapan4: '5%',
        ketqua: 'C',
      },
      {
        stt: '18',
        cauhoi:
          'Mức hoa hồng NHCSXH chi trả cho các Tổ TK&VV về chương trình cho vay nhà ở xã hội là bao nhiêu?',
        dapan1: '0,003%/dư nợ trong hạn/tháng.',
        dapan2: '0,004/dư nợ trong hạn/tháng.',
        dapan3: '0,005%/dư nợ trong hạn/tháng.',
        dapan4: '0,053%/dư nợ trong hạn/tháng.',
        ketqua: 'C',
      },
      {
        stt: '19',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội cấp xã được phân bổ mức phí ủy thác là bao nhiêu? ',
        dapan1: '82%.',
        dapan2: '83%.',
        dapan3: '84%.',
        dapan4: '85%.',
        ketqua: 'C',
      },
      {
        stt: '20',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội cấp huyện được phân bổ mức phí ủy thác là bao nhiêu? ',
        dapan1: '8%.',
        dapan2: '9%.',
        dapan3: '10%.',
        dapan4: '11%.',
        ketqua: 'B',
      },
      {
        stt: '21',
        cauhoi:
          'Theo Văn bản thỏa thuận, hằng năm tổ chức chính trị - xã hội cấp xã phải thực hiện kiểm tra bao nhiêu % Tổ TK&VV trên địa bàn? ',
        dapan1: '70%.',
        dapan2: '80%.',
        dapan3: '90%.',
        dapan4: '100%.',
        ketqua: 'D',
      },
      {
        stt: '22',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội cấp xã phải thực hiện kiểm tra ít nhất bao nhiêu hộ vay vốn tại mỗi Tổ TK&VV được kiểm tra?',
        dapan1: '20 hộ vay vốn.',
        dapan2: '15 hộ vay vốn.',
        dapan3: '10 hộ vay vốn.',
        dapan4: '05 hộ vay vốn.',
        ketqua: 'D',
      },
      {
        stt: '23',
        cauhoi:
          'Theo Văn bản thỏa thuận, tại mỗi xã được kiểm tra, tổ chức chính trị - xã hội cấp huyện phải kiểm tra ít nhất bao nhiêu % Tổ TK&VV? ',
        dapan1: 'Kiểm tra ít nhất 25% Tổ TK&VV.',
        dapan2: 'Kiểm tra ít nhất 15% Tổ TK&VV.',
        dapan3: 'Kiểm tra ít nhất 20% Tổ TK&VV.',
        dapan4: 'Kiểm tra ít nhất 10% Tổ TK&VV.',
        ketqua: 'B',
      },
      {
        stt: '24',
        cauhoi:
          'Theo Văn bản thỏa thuận, hằng năm tổ chức chính trị - xã hội cấp huyện phải thực hiện kiểm tra bao nhiêu % tổ chức chính trị - xã hội cấp xã?',
        dapan1: '100%',
        dapan2: '90%',
        dapan3: '80%',
        dapan4: '70%',
        ketqua: 'A',
      },
      {
        stt: '25',
        cauhoi:
          'Theo Văn bản thỏa thuận, hằng năm tổ chức chính trị - xã hội cấp tỉnh phải thực hiện kiểm tra bao nhiêu tổ chức chính trị - xã hội cấp huyện? ',
        dapan1: '100% tổ chức chính trị - xã hội cấp huyện. ',
        dapan2: '95% tổ chức chính trị - xã hội cấp huyện.',
        dapan3: '90% tổ chức chính trị - xã hội cấp huyện.',
        dapan4: '85% tổ chức chính trị - xã hội cấp huyện.',
        ketqua: 'A',
      },
      {
        stt: '26',
        cauhoi:
          'Theo Văn bản thỏa thuận, tại mỗi huyện được kiểm tra, tổ chức chính trị - xã hội cấp tỉnh phải kiểm tra ít nhất bao nhiêu xã, bao nhiêu Tổ TK&VV?',
        dapan1: 'Kiểm tra ít nhất 01 xã, 02 Tổ TK&VV.',
        dapan2: 'Kiểm tra ít nhất 01 xã, 01 Tổ TK&VV.',
        dapan3: 'Kiểm tra ít nhất 02 xã, 04 Tổ TK&VV.',
        dapan4: 'Kiểm tra ít nhất 03 xã, 06 Tổ TK&VV.',
        ketqua: 'B',
      },
      {
        stt: '27',
        cauhoi:
          'Theo Hợp đồng ủy thác,  nội dung nào không thuộc trách nhiệm của NHCSXH?',
        dapan1:
          'Tạo điều kiện cho Bên nhận ủy thác thực hiện tốt các nội dung ủy thác tại Hợp đồng ủy thác.',
        dapan2:
          'Cung ứng vốn hàng năm theo nhu cầu vốn của Bên nhận ủy thác cho vay.',
        dapan3:
          'Thanh toán đầy đủ và đúng định kỳ trả phí ủy thác theo nội dung Hợp đồng ủy thác.',
        dapan4:
          'Chủ động thông báo cho Bên nhận ủy thác khi có thay đổi, bổ sung về chủ trương, chính sách tín dụng đối với người nghèo và các đối tượng chính sách khác.',
        ketqua: 'B',
      },
      {
        stt: '28',
        cauhoi:
          'Theo Hợp đồng ủy thác, trách nhiệm phối hợp giữa Bên nhận ủy thác và Bên ủy thác gồm nội dung nào? ',
        dapan1:
          'Xây dựng kế hoạch phối hợp kiểm tra, giám sát hàng năm (định kỳ hoặc đột xuất) hoạt động của Tổ TK&VV nhằm nâng cao hiệu quả hoạt động ủy thác.',
        dapan2:
          'Phối hợp thực hiện giao ban theo định kỳ 1 tháng/lần tại Điểm giao dịch xã.',
        dapan3:
          'Phối hợp tổ chức tập huấn nghiệp vụ cho cán bộ Hội cấp xã và Ban quản lý Tổ TK&VV; Tiến hành đánh giá hoạt động của Tổ TK&VV để xếp loại Tổ theo quy định làm cơ sở củng cố, đào tạo, tập huấn, xếp loại thi đua hàng năm.',
        dapan4: 'Tất cả các đáp án trên',
        ketqua: 'D',
      },
      {
        stt: '29',
        cauhoi:
          'Theo Hợp đồng ủy thác, cam kết chung giữa Bên nhận ủy thác và Bên ủy thác gồm nội dung nào?',
        dapan1:
          'Hai bên cam kết phối hợp thực hiện tốt những nội dung trong Hợp đồng; Không can thiệp vào công việc nội bộ của mỗi bên.',
        dapan2:
          'Giữ bí mật nội dung về hoạt động của NHCSXH theo quy định của pháp luật.',
        dapan3:
          'Với tinh thần hợp tác, cùng nhau bàn bạc, tháo gỡ những khó khăn, vướng mắc trong quá trình thực hiện.',
        dapan4: 'Tất cả các đáp án trên',
        ketqua: 'D',
      },
      {
        stt: '30',
        cauhoi:
          'Theo Văn bản thỏa thuận,  tổ chức chính trị - xã hội cấp xã phối hợp cùng NHCSXH cấp huyện tổ chức giao ban định kỳ như thế nào? ',
        dapan1: 'Một (01) tháng/lần tại Điểm giao dịch xã. ',
        dapan2: 'Hai (02) tháng/lần.',
        dapan3: 'Ba (03) tháng/lần.',
        dapan4: 'Sáu (06) tháng/lần.',
        ketqua: 'A',
      },
      {
        stt: '31',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội cấp huyện phối hợp cùng NHCSXH cấp huyện tổ chức giao ban định kỳ như thế nào?',
        dapan1: 'Một (01) tháng/lần.',
        dapan2: 'Hai (02) tháng/lần.',
        dapan3: 'Ba (03) tháng/lần.',
        dapan4: 'Sáu (06) tháng/lần.',
        ketqua: 'B',
      },
      {
        stt: '32',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội cấp tỉnh phối hợp cùng NHCSXH cấp tỉnh tổ chức giao ban định kỳ như thế nào?',
        dapan1: 'Một (01) tháng/lần.',
        dapan2: 'Hai (02) tháng/lần.',
        dapan3: 'Ba (03) tháng/lần.',
        dapan4: 'Sáu (06) tháng/lần.',
        ketqua: 'C',
      },
      {
        stt: '33',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội cấp trung ương phối hợp cùng NHCSXH cấp ương tổ chức giao ban định kỳ như thế nào? ',
        dapan1: 'Một (01) tháng/lần.',
        dapan2: 'Hai (02) tháng/lần.',
        dapan3: 'Ba (03) tháng/lần.',
        dapan4: 'Sáu (06) tháng/lần.',
        ketqua: 'D',
      },
      {
        stt: '34',
        cauhoi:
          'Theo Hợp đồng ủy thác, tổ chức chính trị - xã hội cấp xã trực tiếp tham gia họp và chỉ đạo các buổi họp Tổ TK&VV với các nội dung nào dưới đây?',
        dapan1:
          'Họp thành lập Tổ TK&VV; họp bầu mới, thay đổi Ban quản lý Tổ TK&VV.',
        dapan2: 'Họp xây dựng quy ước hoạt động của Tổ TK&VV.',
        dapan3: 'Họp bình xét cho vay',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '35',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội thực hiện kiểm tra, giám sát hoạt động của Tổ TK&VV như thế nào?',
        dapan1:
          'Giám sát toàn diện các hoạt động của Tổ TK&VV theo quy định; giám sát và đôn đốc Ban quản lý Tổ thực hiện đúng các nhiệm vụ được ủy nhiệm theo Hợp đồng đã ký với NHCSXH.',
        dapan2:
          'Thực hiện kiểm tra việc sử dụng vốn vay của 100% các món vay mới trong vòng 30 ngày kể từ ngày NHCSXH giải ngân cho hộ vay.',
        dapan3:
          'Đôn đốc Ban quản lý Tổ giám sát việc sử dụng vốn vay đúng mục đích và có hiệu quả, trả nợ, trả lãi, thực hành tiết kiệm... của tổ viên.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '36',
        cauhoi:
          'Theo Văn bản thỏa thuận, tổ chức chính trị - xã hội nhận ủy thác không được thực hiện nội dung nào sau đây?',
        dapan1:
          'Phân công bộ phận cán bộ chuyên trách theo dõi và thực hiện việc ủy thác.',
        dapan2:
          'Ban thường vụ tổ chức chính trị - xã hội cấp xã kiêm nhiệm thành viên Ban quản lý Tổ TK&VV.',
        dapan3:
          'Xây dựng kế hoạch kiểm tra, giám sát hoạt động thực hiện ủy thác.',
        dapan4:
          'Định kỳ hàng năm, tổ chức chính trị - xã hội các cấp tổ chức sơ, tổng kết, đánh giá kết quả thực hiện.',
        ketqua: 'B',
      },
      {
        stt: '37',
        cauhoi:
          'Theo Văn bản thỏa thuận, việc tập huấn nghiệp vụ ủy thác cho Ban quản lý Tổ TK&VV do đơn vị nào thực hiện? ',
        dapan1:
          'Tổ chức chính trị - xã hội tổ chức tập huấn hoặc phối hợp với NHCSXH tập huấn',
        dapan2: 'NHCSXH tập huấn',
        dapan3: 'Tổ chức chính trị - xã hội tập huấn',
        dapan4: 'Ủy ban nhân dân cấp xã tập huấn',
        ketqua: 'A',
      },
      {
        stt: '38',
        cauhoi:
          'Cơ cấu các tổ chức chính trị - xã hội tham gia Hội đồng quản trị và Ban đại diện Hội đồng quản trị các cấp của NHCSXH như thế nào?',
        dapan1: 'Cấp trung ương tham gia Hội đồng quản trị NHCSXH.',
        dapan2:
          'Cấp tỉnh tham gia Ban đại diện Hội đồng quản trị NHCSXH cấp tỉnh.',
        dapan3:
          'Cấp huyện tham gia Ban đại diện Hội đồng quản trị NHCSXH cấp huyện.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '39',
        cauhoi:
          'Khi thay đổi nhân sự Lãnh đạo của tổ chức chính trị - xã hội nhận ủy thác cấp xã thì có phải ký lại Hợp đồng ủy thác không?',
        dapan1: 'Có phải ký lại Hợp đồng ủy thác',
        dapan2: 'Không phải ký lại Hợp đồng ủy thác',
        dapan3:
          'Do NHCSXH cấp huyện và tổ chức chính trị - xã hội nhận ủy cấp xã thác quyết định',
        dapan4: 'Tất cả các đáp án trên đều sai',
        ketqua: 'B',
      },
      {
        stt: '40',
        cauhoi:
          'Tại phiên giao dịch xã, cán bộ tổ chức chính trị - xã hội cấp xã cần phải làm gì trước khi Tổ trưởng Tổ TK&VV và tổ viên thực hiện giao dịch với NHCSXH?',
        dapan1:
          'Kiểm tra Bảng kê 13/TD của từng Tổ trưởng Tổ TK&VV đảm bảo có đầy đủ các yếu tố và chữ ký nộp tiền của tổ viên theo quy định.',
        dapan2:
          'Hướng dẫn Tổ trưởng Tổ TK&VV, tổ viên sắp xếp, phân loại tiền.',
        dapan3:
          'Hướng dẫn Tổ trưởng Tổ TK&VV lập Bảng kê các loại tiền nộp đúng với số tiền phải nộp.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '41',
        cauhoi:
          'Đối với chương trình cho vay Nhà ở xã hội, Tổ tiết tiệm và vay vốn KHÔNG thực hiện các công việc nào? ',
        dapan1:
          'Nhận hồ sơ vay vốn và lập danh sách đề nghị vay vốn nhà ở xã hội tại NHCSXH theo mẫu 03a/NƠXH ',
        dapan2:
          'Kiểm tra, giám sát hoạt động của Tổ TK&VV, Ban Quản lý Tổ và tổ viên Tổ TK&VV',
        dapan3:
          'Kết nạp, bổ sung tổ viên, bình xét công  khai các đối tượng xin vay vốn',
        dapan4:
          'Xác nhận trên danh sách đề nghị vay vốn nhà ở xã hội tại NHCSXH theo mẫu 03b/NƠXH',
        ketqua: 'B',
      },
      {
        stt: '42',
        cauhoi:
          'Bà A có hộ khẩu thường trú tại phường A, quận B Thành phố Hà Nội đang có nhu cầu vay vốn để mua, thuê mua nhà ở xã hội tại phường C, quận D của Thành phố HN. Theo quy định hiện hành, đơn vị nào được NHCSXH ủy thác công việc tiếp nhận hồ sơ vay vốn của bà A?',
        dapan1: 'Tổ TK&VV thuộc phường C, quận D',
        dapan2: 'Tổ TK&VV thuộc phường A, quận B',
        dapan3: 'Tổ chức hội của phường A, quận B',
        dapan4: 'Tổ chức hội của phường C, quận D',
        ketqua: 'B',
      },
      {
        stt: '43',
        cauhoi:
          'Tổ chức Hội, đoàn thể kiểm tra sử dụng vốn vay Chương trình cho vay nhà ở xã hội theo Nghị định 100/NĐ-CP, thực hiện như thế nào?',
        dapan1:
          'Không phải kiểm tra vì việc kiểm tra sử dụng vốn vay chương trình này là nhiệm vụ của cán bộ NHCSXH',
        dapan2:
          'Phối hợp với NHCSXH, tổ TK&VV thực hiện kiểm tra sử dụng vốn vay theo mẫu 06/NƠXH',
        dapan3: 'Phối hợp với NHCSXH lập biên bản kiểm tra theo mẫu 06/TD',
        dapan4: 'Phối hợp với Tổ TK&VV kiểm tra theo mẫu 06/TD',
        ketqua: 'B',
      },
      {
        stt: '44',
        cauhoi:
          'Khách hàng vay vốn NOXH đề nghị điều chỉnh kỳ hạn nợ, khách hàng làm hồ sơ đề nghị nào sau đây:',
        dapan1:
          'Khách hàng viết đề nghị điều chỉnh kỳ hạn và  chỉ liên hệ trực tiếp với cán bộ NHCSXH',
        dapan2: 'Khách hàng không phải làm thủ tục gì',
        dapan3:
          'Khách hàng phải viết đề nghị điều chỉnh kỳ hạn liên hệ tổ chức hội, đoàn thể xác nhận trên hồ sơ đề nghị điều chỉnh kỳ hạn trả nợ.',
        dapan4:
          'Khách hàng phải viết đề nghị điều chỉnh kỳ hạn nợ gửi Tổ TK&VV để hoàn thiện hồ sơ đề nghị điều chỉnh kỳ hạn trả nợ  ',
        ketqua: 'D',
      },
      {
        stt: '45',
        cauhoi:
          'Hiện nay, mức phí ủy thác NHCSXH chi trả cho các tổ chức Hội, đoàn thể cấp xã về cho vay nhà ở xã hội là bao nhiêu? ',
        dapan1: '0,005%/dư nợ trong hạn/tháng',
        dapan2: '0,045%/dư nợ trong hạn/tháng',
        dapan3: '0,003%/dư nợ trong hạn/tháng',
        dapan4: '0,035%/dư nợ trong hạn/tháng',
        ketqua: 'C',
      },
      {
        stt: '46',
        cauhoi:
          'Hiện nay, phương thức chi trả mức phí ủy thác NHCSXH chi trả cho các tổ chức Hội, đoàn thể về cho vay nhà ở xã hội được tính như thế nào? ',
        dapan1: 'theo tỉ lệ % trên dư nợ có thu được lãi',
        dapan2: 'theo tỉ lệ % tính trên tổng lãi thực thu',
        dapan3: 'theo tỉ lệ % trên dư nợ trong hạn bình quân tháng',
        dapan4: 'theo tỉ lệ % tính trên dư nợ cho vay bình quân',
        ketqua: 'C',
      },
      {
        stt: '47',
        cauhoi:
          'Trong chương trình tín dụng đối với HSSV, tổ chức chính trị - xã hội nhận ủy thác không phải thực hiện nhiệm vụ nào sau đây? ',
        dapan1: 'Thu tiền gốc, thu tiền lãi và thu tiền gửi của người vay',
        dapan2:
          'Vận động, đôn đốc Ban quản lý Tổ TK&VV tham dự đầy đủ các phiên giao dịch của NHCSXH',
        dapan3: 'Hướng dẫn tổ viên Tổ TK&VV thực hiện giao dịch với NHCSXH',
        dapan4: 'Tổ chức tập huấn nghiệp vụ ủy thác cho Ban quản lý tổ TK&VV',
        ketqua: 'A',
      },
      {
        stt: '48',
        cauhoi:
          'Hội cựu chiến binh xã A nhận ủy thác với NHCSXH chỉ có chương trình hộ sản xuất kinh doanh vùng khó khăn nhưng có tỷ lệ nợ quá hạn từ 4% trở lên thì Tổ chức Hội, đoàn thể đó được hưởng mức phí uỷ thác là bao nhiêu? ',
        dapan1: '0% mức phí uỷ thác',
        dapan2: '10% mức phí uỷ thác',
        dapan3: '50% mức phí uỷ thác',
        dapan4: '80% mức phí uỷ thác',
        ketqua: 'A',
      },
      {
        stt: '49',
        cauhoi:
          'Năm 2019, Trung ương Hội phụ nữ Việt Nam có tham gia Đoàn kiểm tra Liên bộ chương trình tín dụng đối với HSSV , Vậy trong năm đó Trung ương Hội phụ nữ Việt Nam phải thực hiện kiểm tra ít nhất bao nhiêu tổ chức chính trị - xã hội cấp tỉnh? ',
        dapan1: '20% tổ chức chính trị - xã hội cấp tỉnh',
        dapan2: '25% tổ chức chính trị - xã hội cấp tỉnh',
        dapan3: '30% tổ chức chính trị - xã hội cấp tỉnh',
        dapan4: '  35% tổ chức chính trị - xã hội cấp tỉnh',
        ketqua: 'B',
      },
      {
        stt: '50',
        cauhoi:
          'Thủ tướng Chính phủ có Quyết định nâng mức cho vay tín dụng đối với HSSV,  việc tổ chức tập huấn về cơ chế, chính sách, văn bản mới này cho Ban quản lý Tổ TK&VV do đơn vị nào thực hiện? ',
        dapan1:
          'NHCSXH phối hợp với các tổ chức chính trị - xã hội nhận ủy thác thực hiện.',
        dapan2: 'NHCSXH thực hiện',
        dapan3: 'Tổ chức chính trị - xã hội nhận ủy thác thực hiện',
        dapan4: 'Các phương án trên đều đúng',
        ketqua: 'A',
      },
      {
        stt: '51',
        cauhoi:
          'Đối với mức vay đến 50 triệu đồng chương trình hộ sản xuất kinh doanh tại vùng khó khăn, tổ chức hội đoàn thể cấp xã phải đảm nhận các phần việc nào trong quá trình vay vốn của khách hàng?',
        dapan1:
          'Chỉ đạo và tham gia cùng Tổ TK&VV tổ chức họp Tổ để bình xét công khai; Kiểm tra, giám sát quá trình sử dụng vốn vay của người vay theo hình thức đối chiếu công khai, thông báo kịp thời cho Ngân hàng nơi cho vay về các trường hợp sử dụng sai mục đích, vay ké, bỏ trốn, chết, mất tích, bị rủi ro, thông báo kịp thời cho Ngân hàng nơi cho vay về các trường hợp sử dụng sai mục đích, vay ké, bỏ trốn, chết, mất tích; Chỉ đạo và giám sát Ban quản lý Tổ TK&VV trong việc thực hiện Hợp đồng uỷ nhiệm đã ký với NHCSXH',
        dapan2:
          'Chỉ đạo và tham gia cùng Tổ TK&VV tổ chức họp Tổ để bình xét công khai; Kiểm tra điều kiện vay vốn của người vay khi nhận Giấy đề nghị vay vốn từ người vay để xác định đúng đối tượng được vay.',
        dapan3:
          'Kiểm tra, giám sát quá trình sử dụng vốn vay của người vay theo hình thức đối chiếu công khai, thông báo kịp thời cho Ngân hàng nơi cho vay về các trường hợp sử dụng sai mục đích, vay ké, bỏ trốn, chết, mất tích, bị rủi ro, thông báo kịp thời cho Ngân hàng nơi cho vay về các trường hợp sử dụng sai mục đích, vay ké, bỏ trốn, chết, mất tích',
        dapan4:
          'Chỉ đạo và tham gia cùng Tổ TK&VV tổ chức họp Tổ để bình xét công khai; Thực hiện kiểm tra đối chiếu Danh sách hộ gia đình đề nghị vay vốn NHCSXH với Danh sách thành viên Tổ TK&VV; Kiểm tra tính pháp lý của bộ hồ sơ xin vay theo quy định',
        ketqua: 'A',
      },
      {
        stt: '52',
        cauhoi:
          'Đối với chương trình cho vay thương nhân hoạt động thương mại tại vùng khó khăn, phương thức cho vay trực tiếp có ủy thác một số nội dung công việc qua các tổ chức chính trị- xã hội được áp dụng đối với?',
        dapan1:
          'Thương nhân là cá nhân không thực hiện mở sổ sách kế toán và nộp thuế khoán theo quy định của cơ quan thuế',
        dapan2:
          'Thương nhân là cá nhân thực hiện mở sổ sách kế toán và kê khai nộp thuế theo quy định của pháp luật',
        dapan3: 'Thương nhân là tổ chức kinh tế được thành lập hợp pháp',
        dapan4: 'Thương nhân là cá nhân',
        ketqua: 'D',
      },
      {
        stt: '53',
        cauhoi:
          'Đối với HSSV mồ côi vay vốn tại NHCSXH, thì Tổ chức chính trị xã hội nhận ủy thác phải làm những việc gì sau đây? ',
        dapan1: 'Tham gia họp bình xét cho vay cùng với Tổ TK&VV',
        dapan2:
          'Thực hiện kiểm tra sử dụng vốn vay  trong vòng 30 ngày sau khi giải ngân.',
        dapan3:
          ' Phối hợp cùng với Tổ TK&VV đôn đốc người vay trả nợ và thu lãi hàng tháng',
        dapan4: 'Không phải thực hiện các công việc trên',
        ketqua: 'D',
      },
      {
        stt: '54',
        cauhoi:
          'Hộ gia đình vay vốn chương trình hộ sản xuất kinh doanh vùng khó khăn đề nghị NHCSXH phê duyệt cho vay 70 triệu đồng để thực hiện dự án chăn nuôi đàn gia súc. Để được vay vốn, Hội Đoàn thể nhận ủy thác phải làm những việc gì sau đây? ',
        dapan1: 'Thực hiện thẩm định dự án',
        dapan2:
          'Thực hiện kiểm tra sử dụng vốn vay  trong vòng 30 ngày sau khi giải ngân',
        dapan3: 'Thực hiện việc gửi thông báo Giấy báo nợ đến hạn trả nợ',
        dapan4: 'Các phương án trên đều sai',
        ketqua: 'D',
      },
      {
        stt: '55',
        cauhoi:
          'Đối tượng nào trong chương trình cho vay ưu đãi tạo việc làm có vay vốn theo phương thức cho vay trực tiếp có ủy thác một số nội dung công việc trong quy trình cho vay cho các tổ chức chính trị - xã thông qua Tổ TK&VV? ',
        dapan1: 'Người lao động',
        dapan2: 'Hợp tác xã',
        dapan3: 'Tổ hợp tác',
        dapan4: 'Hộ kinh doanh',
        ketqua: 'A',
      },
      {
        stt: '56',
        cauhoi:
          'Việc kiểm tra, giám sát đối với thương nhân là cá nhân vay vốn chương trình Thương nhân hoạt động thương mại tại vùng khó khăn do cơ quan nào sau đây thực hiện?',
        dapan1:
          'Ngân hàng Chính sách xã hội nơi cho vay, Hội đoàn thể và Ban giảm nghèo cấp xã.',
        dapan2:
          'Ngân hàng Chính sách xã hội nơi cho vay, Tổ chức chính trị xã hội cấp xã nhận ủy thác',
        dapan3:
          'Ngân hàng Chính sách xã hội nơi cho vay; Tổ chức chính trị xã hội cấp xã nhận ủy thác; Tổ Tiết kiệm và vay vốn',
        dapan4:
          'Ngân hàng Chính sách xã hội nơi cho vay, Tổ Tiết kiệm và vay vốn và Ban giảm nghèo cấp xã',
        ketqua: 'C',
      },
      {
        stt: '57',
        cauhoi:
          'Đối với người lao động vay vốn Chương trình cho vay ưu đãi tạo việc làm từ nguồn vốn do Tổng Liên đoàn lao động Việt Nam quản lý, ai là người gửi bộ hồ sơ lên NHCSXH nơi cho vay?',
        dapan1: 'Người lao động',
        dapan2: 'Tổ TK&VV',
        dapan3: 'Tổ chức Hội đoàn thể cấp xã',
        dapan4: 'Tổ chức Hội đoàn thể cấp huyện',
        ketqua: 'A',
      },
      {
        stt: '58',
        cauhoi:
          'Đối với người lao động vay vốn Chương trình cho vay ưu đãi tạo việc làm từ nguồn vốn do Hội Người mù Việt Nam quản lý, ai là người gửi bộ hồ sơ lên NHCSXH nơi cho vay?',
        dapan1: 'Người lao động',
        dapan2: 'Tổ TK&VV',
        dapan3: 'Hội Người mù cấp xã',
        dapan4: 'Hội Người mù cấp huyện',
        ketqua: 'D',
      },
      {
        stt: '59',
        cauhoi:
          'Đối với người lao động vay vốn chương trình cho vay ưu đãi tạo việc làm từ nguồn vốn do Hội Nông dân Việt Nam quản lý, ai là người gửi bộ hồ sơ lên NHCSXH nơi cho vay?',
        dapan1: 'Người lao động',
        dapan2: 'Tổ TK&VV',
        dapan3: 'Hội Nông dân cấp xã',
        dapan4: 'Hội Nông dân cấp huyện',
        ketqua: 'B',
      },
      {
        stt: '60',
        cauhoi:
          'Hiện nay, mức phí ủy thác NHCSXH chi trả cho các tổ chức Hội, đoàn thể chương trình Giải quyết việc làm là bao nhiêu? ',
        dapan1: 'Theo tỉ lệ 0,032%/tháng trên dư nợ có thu được lãi',
        dapan2: 'Theo tỉ lệ 0,04%/tháng trên dư nợ có thu được lãi',
        dapan3: 'Theo tỉ lệ 0,032%/tháng trên dư nợ trong hạn bình quân tháng',
        dapan4: 'Theo tỉ lệ 0,04%/tháng trên dư nợ trong hạn bình quân tháng',
        ketqua: 'A',
      },
      {
        stt: '61',
        cauhoi:
          'Khi khách hàng gặp rủi ro do nguyên nhân khách quan thì Tổ chức hội nhận ủy thác cấp xã phải thực hiện những nội dung nào?',
        dapan1:
          'Thông báo kịp thời cho Ngân hàng nơi cho vay về khách hàng bị rủi ro do nguyên nhân khách quan',
        dapan2: 'Cùng hộ vay lập Biên bản gửi NHCSXH nơi cho vay',
        dapan3: 'Thông báo với Tổ chức hội nhận ủy thác cấp trên',
        dapan4: 'Tất cả các phương án trên',
        ketqua: 'A',
      },
      {
        stt: '62',
        cauhoi:
          'Hộ gia đình ông Nguyễn Văn A vay vốn chương trình cho vay hộ cận nghèo để mua 2 bò sữa. Ông Nguyễn Văn A thuộc tổ TK&VV do Hội phụ nữ nhận ủy thác cho vay. Do lũ lụt xảy ra vào tháng 10/2020 gia đình ông A bị chết 02 con bò sữa mua từ nguồn vốn vay NHCSXH. Hội Phụ nữ cấp xã nơi ông A sinh sống phải thực hiện những công việc nào? ',
        dapan1: 'Hướng dẫn hộ vay lập hồ sơ đề nghị khoanh nợ',
        dapan2: 'Phối hợp với Tổ TK&VV lập hồ sơ đề nghị khoanh nợ',
        dapan3: 'Thông báo và phối hợp với NHCSXH lập hồ sơ đề nghị khoanh nợ',
        dapan4:
          'Thông báo và phối hợp với NHCSXH, UBND cấp xã hướng dẫn hộ vay lập hồ sơ đề nghị xử lý nợ',
        ketqua: 'D',
      },
      {
        stt: '63',
        cauhoi:
          'Khi khách hàng vay vốn bị rủi ro do nguyên nhân khách quan đủ điều kiện xem xét xử lý nợ, tổ chức chính trị - xã hội cấp xã cùng với đơn vị nào sau đây lập Biên bản đề nghị xử lý nợ?',
        dapan1: 'NHCSXH nơi cho vay',
        dapan2: 'Ủy ban nhân dân cấp xã',
        dapan3: 'Tổ trưởng Tổ TK&VV',
        dapan4: 'Tất cả các phương án trên',
        ketqua: 'D',
      },
      {
        stt: '64',
        cauhoi:
          'NHCSXH cùng tổ chức chính trị - xã hội cấp xã phối hợp với đơn vị nào sau đây đánh giá và xem xét khả năng trả nợ thực tế của khách hàng trước khi hết thời gian khoanh nợ? ',
        dapan1: 'Tổ trưởng Tổ TK&VV',
        dapan2: 'Ủy ban nhân dân xã',
        dapan3: 'Tổ chức chính trị - xã hội cấp huyện',
        dapan4: 'Cả a và b ',
        ketqua: 'D',
      },
      {
        stt: '65',
        cauhoi:
          'Khi khách hàng khi bị rủi ro do nguyên nhân khách quan, tổ chức chính trị xã hội cấp xã tham gia thực hiện các nội dung nào sau đây?',
        dapan1:
          'Xác định nguyên nhân đề nghị xử lý nợ bị rủi ro; đánh giá mức độ thiệt hại về vốn và tài sản; đánh giá khả năng trả nợ của khách hàng; tham gia lập và ký trên biên bản đề nghị xử lý nợ bị rủi ro',
        dapan2:
          'Xác định nguyên nhân đề nghị xử lý nợ bị rủi ro; đánh giá mức độ thiệt hại về vốn và tài sản; tham gia lập và ký trên biên bản đề nghị xử lý nợ bị rủi ro',
        dapan3:
          'Đánh giá mức độ thiệt hại về vốn và tài sản; đánh giá khả năng trả nợ của khách hàng; tham gia lập và ký trên biên bản đề nghị xử lý nợ bị rủi ro ',
        dapan4:
          'Xác định nguyên nhân đề nghị xử lý nợ bị rủi ro; đánh giá mức độ thiệt hại về vốn và tài sản; đánh giá khả năng trả nợ của khách hàng; ký xác nhận trên đơn đề nghị xử lý nợ bị rủi ro của khách hàng',
        ketqua: 'A',
      },
      {
        stt: '66',
        cauhoi:
          'Khách hàng đề nghị gia hạn nợ khi bị rủi ro do nguyên nhân khách quan với mức độ thiệt hại về vốn và tài sản dưới 40% trên tổng phương án sản xuất kinh doanh vốn vay, tổ chức chính trị - xã hội cấp xã xác nhận trên?',
        dapan1: ' Đơn đề nghị gia hạn nợ',
        dapan2: 'Biên bản đề nghị xử lý nợ',
        dapan3: 'Đơn đề nghị gia hạn nợ và Biên bản đề nghị xử lý nợ',
        dapan4: 'Đơn đề nghị xử lý rủi ro',
        ketqua: 'B',
      },
      {
        stt: '67',
        cauhoi:
          'Khách hàng đề nghị khoanh nợ khi bị rủi ro do nguyên nhân khách quan với mức độ thiệt hại về vốn và tài sản là 80% trên tổng phương án sản xuất kinh doanh vốn vay, tổ chức chính trị - xã hội cấp xã cùng đơn vị nào sau đây lập biên bản đề nghị khoanh nợ?',
        dapan1: 'Công an xã',
        dapan2: ' Trưởng thôn',
        dapan3: ' NHCSXH nơi cho vay',
        dapan4: 'Cả a và c ',
        ketqua: 'C',
      },
      {
        stt: '68',
        cauhoi:
          'Khách hàng bị rủi ro do nguyên nhân khách quan đã được khoanh nợ với nguyên nhân dịch bệnh làm thiệt hại đối tượng vốn vay, hết thời gian khoanh nợ khách hàng không có khả năng trả nợ và có đơn đề nghị xóa nợ. Đơn vị nào sau đây cùng NHCSXH đánh giá khả năng trả nợ, lập và ký xác nhận trên Biên bản đề nghị xóa nợ?',
        dapan1: 'Ủy ban nhân dân xã cấp xã',
        dapan2: 'Trưởng thôn',
        dapan3: 'Tổ chức chính  trị - xã hội cấp xã ',
        dapan4: ' Cả a và c ',
        ketqua: 'D',
      },
      {
        stt: '69',
        cauhoi:
          'Tổ chức hội nhận ủy thác cấp xã cùng với NHCSXH thực hiện những công việc nào sau đây?',
        dapan1: '  Xử lý các trường hợp nợ quá hạn',
        dapan2: ' Xử lý các trường hợp hộ vay bỏ đi khỏi nơi cư trú',
        dapan3: ' Tham gia đối chiếu, phân loại nợ.',
        dapan4: ' Tất cả các phương án trên  \r\n',
        ketqua: 'D',
      },
      {
        stt: '70',
        cauhoi:
          'Thành phần nào sau đây tham gia Ban chỉ đạo đối chiếu, phân loại nợ theo khả năng trả nợ của khách hàng tại xã? ',
        dapan1: 'Tổ chức chính trị - xã hội cấp xã ',
        dapan2: 'Trưởng các thôn trong xã',
        dapan3: 'Tổ chức chính trị - xã hội cấp huyện',
        dapan4: ' Tổ trưởng Tổ TK&VV\r\n',
        ketqua: 'A',
      },
      {
        stt: '71',
        cauhoi:
          'Tổ chức chính trị - xã hội cấp xã tham gia thực hiện những công việc nào trong công tác phối hợp với NHCSXH? ',
        dapan1:
          'Ban chỉ đạo đối chiếu, phân loại nợ theo khả năng trả nợ của khách hàng tại xã',
        dapan2: ' Ban quản lý Tổ TK&VV',
        dapan3: 'Thành viên Ban đại diện Hội đồng quản trị NHCSXH cấp huyện',
        dapan4: ' Tất các đáp án trên đều đúng',
        ketqua: 'A',
      },
      {
        stt: '72',
        cauhoi:
          'Theo quy chế phân loại nợ tại NHCSXH, NHCSXH, tổ chức chính trị xã hội cấp xã và đơn vị nào thực hiện đối chiếu, phân loại nợ theo khả năng trả nợ của khách hàng? ',
        dapan1:
          ' Ban quản lý tổ TK&VV/Chủ dự án; Trưởng thôn; Công an thôn;  khách hàng vay vốn.',
        dapan2:
          ' Ban quản lý tổ TK&VV/Chủ dự án; Công an thôn; khách hàng vay vốn.',
        dapan3:
          'Ban quản lý tổ TK&VV/Chủ dự án; đại diện cơ quan chủ quản dự án (nếu cần); Trưởng thôn; Công an thôn (trường hợp khách hàng bỏ đi khỏi nơi cư trú); khách hàng vay vốn.',
        dapan4: ' Tất các phương án trên đều sai\r\n',
        ketqua: 'C',
      },
      {
        stt: '73',
        cauhoi:
          'Theo quy định, khi nhận được phiếu báo hộ vay bỏ đi khỏi nơi cư trú đơn vị nào tổng hợp danh sách hộ vay bỏ đi khỏi nơi cư trú?',
        dapan1: 'Tổ chức chính  trị - xã hội cấp xã ',
        dapan2: 'Tổ trưởng Tổ TK&VV',
        dapan3: 'Cán bộ tín dụng được phân công theo dõi địa bàn\r\n',
        dapan4: 'Tổ chức chính trị xã hội cấp xã phối hợp với Ban giảm nghèo',
        ketqua: 'D',
      },
      {
        stt: '74',
        cauhoi:
          'Theo quy định, đơn vị nào phối hợp với NHCSXH và chính quyền địa phương rà soát, tìm kiếm thông tin địa chỉ hộ vay bỏ đi khỏi nơi cư trú?',
        dapan1: 'Tổ chức chính trị - xã hội cấp xã',
        dapan2: 'Tổ chức chính trị xã hội cấp huyện',
        dapan3: ' Đáp án a và b đúng',
        dapan4: ' Đáp án a và b sai',
        ketqua: 'A',
      },
      {
        stt: '75',
        cauhoi:
          'Tổ chức chính trị - xã hội cấp xã phối hợp với NHCSXH và chính quyền thực hiện những nội dung nào sau đây?',
        dapan1: 'Rà soát, tìm kiếm thông tin hộ vay bỏ đi khỏi nơi cư trú',
        dapan2: 'Lập hồ sơ đề nghị xử lý nợ rủi ro',
        dapan3: 'Xử lý các trường hợp chây ỳ',
        dapan4: 'Tất các phương án trên',
        ketqua: 'D',
      },
      {
        stt: '76',
        cauhoi:
          'Theo quy định, Tổ trưởng Tổ TK&VV gửi phiếu báo hộ vay vốn bỏ đi khỏi nơi cư trú cho đơn vị nào? ',
        dapan1: 'Tổ chức chính trị - xã hội cấp xã',
        dapan2: ' Cán bộ tín dụng theo dõi địa bàn xã',
        dapan3: ' Ban giảm nghèo xã\r\n ',
        dapan4:
          ' Tổ chức chính trị - xã hội cấp xã và Cán bộ tín dụng theo dõi địa bàn ',
        ketqua: 'A',
      },
      {
        stt: '77',
        cauhoi:
          'Theo quy định, thành phần nào sau đây tham gia họp rà soát, xác minh thông tin hộ vay vốn bỏ đi khỏi nơi cư trú tại xã?',
        dapan1:
          'Đại diện lãnh đạo UBND xã; tổ chức chính trị - xã hộ cấp huyện; cán bộ Ban giảm nghèo; công an xã; cán bộ tín dụng theo dõi địa bàn xã.',
        dapan2:
          'Đại diện lãnh đạo UBND xã; tổ chức chính trị - xã hội cấp xã; cán bộ Ban giảm nghèo; công an xã; cán bộ tín dụng theo dõi địa bàn xã',
        dapan3:
          'Đại diện lãnh đạo UBND xã; tổ chức chính trị - xã hội cấp xã; cán bộ Ban giảm nghèo; cán bộ tín dụng theo dõi địa bàn xã',
        dapan4:
          'Đại diện lãnh đạo UBND xã; tổ chức chính trị - xã hội cấp xã; công an thôn; cán bộ tín dụng theo dõi địa bàn xã',
        ketqua: 'B',
      },
      {
        stt: '78',
        cauhoi:
          'Trong những nhiệm vụ sau đây, nhiệm vụ nào không thuộc trách nhiệm của tổ chức chính trị - xã hội cấp xã trong việc rà soát, xử lý đối với hộ vay vốn bỏ đi khỏi nơi cư trú:',
        dapan1:
          'Cùng Ban giảm nghèo xã lập Danh sách hộ vay vốn bỏ đi khỏi nơi cư trú.',
        dapan2: 'Lập Phiếu báo hộ vay vốn bỏ đi khỏi nơi cư trú.',
        dapan3: 'Nhận Phiếu báo hộ vay vốn bỏ đi khỏi nơi cư trú.',
        dapan4:
          'Tham gia thành phần cuộc họp rà soát, bổ sung thông tin các hộ vay vốn bỏ đi khỏi nơi cư trú do Đại diện lãnh đạo UBND xã chủ trì.',
        ketqua: 'B',
      },
      {
        stt: '79',
        cauhoi:
          'Theo văn bản Thỏa thuận hiện hành giữa NHCSXH với các tổ chức chính trị - xã hội, khi khách hàng bị rủi ro do nguyên nhân khách quan đủ điều kiện xử lý rủi ro theo quy định, tổ chức chính trị - xã hội cấp xã thực hiện công việc nào?',
        dapan1:
          'Cùng hộ vay lập hồ sơ đề nghị xử lý rủi ro sau khi yêu cầu hộ vay phải trả hết lãi tồn ',
        dapan2: 'Cùng hộ vay lập biên bản đề nghị xử lý nợ rủi ro',
        dapan3: 'Đôn đốc hộ vay trả hết nợ gốc và lãi rồi bình xét cho vay lại',
        dapan4:
          'Phối hợp với NHCSXH hướng dẫn hộ vay lập hồ sơ đề nghị xử lý nợ rủi ro do nguyên nhân khách quan',
        ketqua: 'D',
      },
      {
        stt: '80',
        cauhoi:
          'Theo quy định về phân loại nợ tại NHCSXH,  trong quá trình đối chiếu phát sinh chênh lệch hoặc không đối chiếu được, thành phần nào sau đây xác nhận trên biên bản xác minh chênh lệch nợ vay, thực trạng hộ vay?',
        dapan1:
          'Tổ TK&VV/Chủ dự án; Cơ quan chủ quản/Tổ chức chính trị - xã hội cấp huyện; Trưởng thôn; cán bộ NHCSXH ',
        dapan2:
          'Tổ TK&VV/Chủ dự án; Cơ quan chủ quản/Tổ chức chính trị - xã hội; Trưởng thôn; cán bộ NHCSXH.',
        dapan3:
          'Tổ TK&VV/Chủ dự án; Cơ quan chủ quản/Tổ chức chính trị - xã hội; Trưởng thôn; cán bộ ban giảm nghèo xã; Cán bộ NHCSXH',
        dapan4:
          'Tổ TK&VV/Chủ dự án; Cơ quan chủ quản/Tổ chức chính trị - xã hội; Trưởng thôn;Ủy ban nhân dân cấp xã; Cán bộ NHCSXH.',
        ketqua: 'B',
      },
      {
        stt: 'PHẦN 4: CÂU HỎI PHẦN CHUYÊN MÔN NGHIỆP VỤ (150 CÂU)',
      },
      {
        stt: 'I. TÍN DỤNG NGƯỜI NGHÈO (30 CÂU)',
      },
      {
        stt: '1',
        cauhoi:
          'Cấp thẩm quyền nào phê duyệt thành lập, công nhận và cho phép Tổ TK&VV hoạt động? ',
        dapan1: 'Ủy ban nhân dân cấp xã.',
        dapan2: 'NHCSXH nơi cho vay.',
        dapan3: 'Hội đoàn thể cấp xã làm ủy thác.',
        dapan4: 'Ban đại diện HĐQT NHCSXH cấp huyện.',
        ketqua: 'A',
      },
      {
        stt: '2',
        cauhoi:
          'Biên bản họp Tổ mẫu số 10C/TD không được sử dụng cho cuộc họp nào dưới đây?',
        dapan1: 'Thay đổi thành viên Ban quản lý Tổ TK&VV.',
        dapan2: 'Kết nạp tổ viên và cho tổ viên ra khỏi Tổ.',
        dapan3: 'Bình xét cho vay.',
        dapan4: 'Thống nhất thay đổi mức tiền gửi tối thiểu của các tổ viên.',
        ketqua: 'A',
      },
      {
        stt: '3',
        cauhoi:
          'Việc chấm điểm để đánh giá chất lượng hoạt động ủy nhiệm của Tổ TK&VV được thực hiện như thế nào?',
        dapan1:
          'Do cán bộ tín dụng được phân công theo dõi địa bàn cùng Tổ chức Hội, đoàn thể cấp xã chấm điểm.',
        dapan2: 'Được chấm tự động trên hệ thống thông tin báo cáo tại NHCSXH.',
        dapan3: 'Do cán bộ của tổ chức Hội, đoàn thể cấp xã chấm điểm.',
        dapan4: 'Tất cả các đáp án đều đúng.',
        ketqua: 'B',
      },
      {
        stt: '4',
        cauhoi:
          'Đến ngày giao dịch xã theo lịch cố định, ông A là Tổ trưởng Tổ TK&VV do có việc đột xuất nên không thể đến Điểm giao dịch xã để thanh toán ủy nhiệm với ngân hàng. Ông A giải quyết vấn đề này bằng cách nào?',
        dapan1: 'Nhờ Chủ tịch Hội phụ nữ giao dịch thay.',
        dapan2: 'Phân công Tổ phó Tổ TK&VV giao dịch với NHCSXH.',
        dapan3: 'Chủ tịch Hội Nông dân giao dịch thay.',
        dapan4: 'Ủy quyền cho một thành viên trong gia đình đi thay.',
        ketqua: 'B',
      },
      {
        stt: '5',
        cauhoi:
          'Ban quản lý Tổ TK&VV không được thực hiện nội dung công việc nào sau đây? ',
        dapan1: 'Thu nợ gốc của tổ viên Tổ TK&VV.',
        dapan2: 'Tiếp nhận Giấy đề nghị vay vốn của tổ viên gửi đến.',
        dapan3: 'Tổ chức họp Tổ để bình xét cho vay.',
        dapan4: 'Nhận kết quả phê duyệt cho vay của NHCSXH.',
        ketqua: 'A',
      },
      {
        stt: '6',
        cauhoi: 'Tổ giao dịch xã có tối thiểu bao nhiêu cán bộ? ',
        dapan1: '02 (Hai) cán bộ.',
        dapan2: '03 (Ba) cán bộ.',
        dapan3: '04 (Bốn) cán bộ.',
        dapan4: 'Không quy định.',
        ketqua: 'B',
      },
      {
        stt: '7',
        cauhoi:
          'Trong các nghiệp vụ sau đây thì nghiệp vụ nào thuộc nghiệp vụ của Tổ giao dịch xã? ',
        dapan1:
          'Thực hiện các giao dịch thu, chi thuộc nghiệp vụ tín dụng và nghiệp vụ tiền gửi theo quy định.',
        dapan2: 'Chi thù lao cán bộ xã phường, chi phí uỷ thác, hoa hồng.',
        dapan3:
          'Nhận hồ sơ cho vay, hồ sơ xử lý nợ bị rủi ro và các hồ sơ liên quan khác. ',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '8',
        cauhoi:
          'Cán bộ nào được phân công làm Tổ trưởng Tổ giao dịch xã là ai?',
        dapan1:
          'Cán bộ tín dụng được phân công theo dõi địa bàn, trường hợp bố trí cán bộ khác do Giám đốc NHCSXH nơi cho vay xem xét, quyết định.',
        dapan2:
          'Cán bộ tín dụng được phân công theo dõi địa bàn xã nơi phát sinh phiên giao dịch. Trường hợp bố trí cán bộ khác làm Tổ trưởng Tổ giao dịch xã do Giám đốc NHCSXH nơi cho vay xem xét, quyết định.',
        dapan3:
          'Tổ trưởng Tổ Kế hoạch - Nghiệp vụ. Trường hợp bố trí cán bộ khác làm Tổ trưởng Tổ giao dịch xã do Giám đốc NHCSXH nơi cho vay xem xét, quyết định.',
        dapan4:
          'Phó Giám đốc Phòng giao dịch NHCSXH. Trường hợp bố trí cán bộ khác làm Tổ trưởng Tổ giao dịch xã do Giám đốc NHCSXH nơi cho vay xem xét, quyết định.',
        ketqua: 'B',
      },
      {
        stt: '9',
        cauhoi:
          'Cuộc họp giao ban tại Điểm giao dịch xã có sự tham gia của đại diện lãnh đạo UBND cấp xã, lãnh đạo tổ chức chính trị - xã hội nhận ủy thác cấp xã, thì cuộc họp này do ai chủ trì? ',
        dapan1: 'Lãnh đạo tổ chức chính trị - xã hội nhận ủy thác cấp xã.',
        dapan2: 'Kiểm soát viên Tổ giao dịch xã.',
        dapan3: 'Tổ trưởng Tổ giao dịch xã.',
        dapan4: 'Lãnh đạo UBND cấp xã.',
        ketqua: 'C',
      },
      {
        stt: '10',
        cauhoi:
          'Ngày giao dịch theo lịch cố định trùng vào các ngày được nghỉ lễ, nghỉ cuối tuần thì NHCSXH nơi cho vay thực hiện như thế nào? ',
        dapan1: 'Chuyển lên ngày làm việc trước liền kề.',
        dapan2: 'Tổ chức giao dịch bình thường.',
        dapan3: 'Chuyển xuống ngày làm việc sau liền kề            ',
        dapan4: 'Chuyển sang ngày hợp lý khác trong cùng tháng.',
        ketqua: 'B',
      },
      {
        stt: '11',
        cauhoi:
          'Đối với xã, phường, thị trấn giao dịch tại trụ sở NHCSXH thì tại trụ sở UBND xã, phường, thị trấn đó thực hiện công khai những nội dung nào? ',
        dapan1:
          'Thông báo chính sách tín dụng ưu đãi của Nhà nước đối với người nghèo và các đối tượng chính sách khác. ',
        dapan2:
          'Công khai Danh sách hộ vay vốn, công khai chính sách mới (nếu có).',
        dapan3: 'Hòm thư góp ý.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '12',
        cauhoi:
          'Những thành phần nào phải tham gia dự họp bắt buộc tại cuộc họp giao ban hằng tháng tại Điểm giao dịch xã ? ',
        dapan1:
          'Tổ trưởng Tổ giao dịch xã, lãnh đạo đơn vị nhận uỷ thác cấp xã, trưởng thôn, chủ tịch UBND cấp xã, Tổ trưởng Tổ TK&VV.',
        dapan2:
          'Tổ trưởng Tổ giao dịch xã, cán bộ đơn vị nhận uỷ thác cấp xã, trưởng thôn, chủ tịch UBND cấp xã, Tổ trưởng Tổ TK&VV.',
        dapan3:
          'Tổ trưởng Tổ giao dịch xã, lãnh đạo đơn vị nhận uỷ thác cấp xã, Tổ trưởng Tổ TK&VV.',
        dapan4: 'Tổ trưởng Tổ giao dịch xã, Tổ trưởng tổ TK&VV, trưởng thôn.',
        ketqua: 'C',
      },
      {
        stt: '13',
        cauhoi:
          'Chức danh nào trong lãnh đạo cấp ủy, chính quyền cấp xã được tham gia thành viên Ban đại diện Hội đồng quản trị NHCSXH cấp huyện? ',
        dapan1: 'Chủ tịch Hội đồng nhân dân cấp xã.',
        dapan2: 'Chủ tịch UBND cấp xã.',
        dapan3: 'Phó Chủ tịch UBND cấp xã.',
        dapan4: 'Bí thư Đảng ủy xã.',
        ketqua: 'B',
      },
      {
        stt: '14',
        cauhoi:
          'Chủ tịch UBND cấp xã, với vai trò là thành viên Ban đại diện HĐQT NHCSXH cấp huyện, được Trưởng Ban đại diện Hội đồng quản trị NHCSXH cấp huyện giao những nhiệm vụ gì?',
        dapan1:
          'Chủ trì chỉ đạo và triển khai thực hiện các chương trình tín dụng của NHCSXH trên địa bàn cấp xã đảm bảo đúng đối tượng được thụ hưởng chính sách theo quy định.',
        dapan2:
          'Kiện toàn Ban giảm nghèo nhằm nâng cao chất lượng tham mưu, giúp việc cho UBND cùng cấp quản lý, phê duyệt danh sách hộ nghèo và đối tượng chính sách vay vốn NHCSXH.',
        dapan3:
          'Chỉ đạo Trưởng thôn phối hợp cùng NHCSXH, các tổ chức chính trị - xã hội, Tổ TK&VV quản lý chặt chẽ vốn tín dụng chính sách trên địa bàn. ',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '15',
        cauhoi:
          'Chủ tịch UBND cấp xã, với vai trò là thành viên Ban đại diện HĐQT NHCSXH cấp huyện, có trách nhiệm chỉ đạo Trưởng thôn làm những công việc gì liên quan đến hoạt động tín dụng chính sách?',
        dapan1:
          'Phối hợp cùng NHCSXH, các tổ chức chính trị - xã hội, Tổ TK&VV quản lý chặt chẽ vốn tín dụng chính sách trên địa bàn.',
        dapan2:
          'Theo dõi, giúp đỡ người vay vốn sử dụng vốn đúng mục đích, có hiệu quả, đôn đốc người vay trả nợ, trả lãi ngân hàng đầy đủ, đúng hạn.',
        dapan3: 'Tích cực tham gia xử lý các khoản nợ quá hạn, nợ xấu.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '16',
        cauhoi:
          'Khi họp Ban đại diện HĐQT NHCSXH cấp huyện, việc báo cáo  của Chủ tịch UBND cấp xã tập trung chủ yếu vào những vấn đề gì? ',
        dapan1:
          'Phản ánh ngắn gọn về tình hình hoạt động tín dụng; kết quả thực hiện kiểm tra, giám sát của thành viên Ban đại diện tại địa bàn xã.',
        dapan2:
          'Nhu cầu vốn cho hộ nghèo và các đối tượng chính sách so với kế hoạch vốn được thông báo và kế hoạch triển khai kế hoạch tín dụng trong quý tiếp theo.',
        dapan3:
          'Những khó khăn, vướng mắc, hạn chế và đề xuất, kiến nghị trong tổ chức, triển khai thực hiện các chương trình tín dụng tại địa bàn.',
        dapan4: 'Tất cả các đáp án trên.',
        ketqua: 'D',
      },
      {
        stt: '17',
        cauhoi:
          'Nếu Chủ tịch UBND cấp xã không thể tham dự phiên họp Ban đại diện Hội đồng quản trị NHCSXH cấp huyện thì xử lý vấn đề này như thế nào? ',
        dapan1: 'Cử Phó Chủ tịch UBND cấp xã đi họp thay.',
        dapan2:
          'Có ý kiến tham gia bằng văn bản về kết quả thực hiện nhiệm vụ trong kỳ, kế hoạch kỳ tiếp theo và có ý kiến tham gia đầy đủ về các vấn đề được hỏi trong tài liệu họp; gửi NHCSXH cấp huyện trước cuộc họp để tổng hợp, báo cáo Ban đại diện.',
        dapan3: 'Cử Trưởng Ban giảm nghèo cấp xã đi họp thay.',
        dapan4: 'Có văn bản nêu rõ lý do không tham dự phiên họp.',
        ketqua: 'B',
      },
      {
        stt: '18',
        cauhoi:
          'Hộ nghèo có thể được vay vốn chương trình tín dụng nào sau đây? ',
        dapan1: 'Cho vay hộ cận nghèo.',
        dapan2: 'Cho vay hộ mới thoát nghèo.',
        dapan3: 'Cho vay hộ sản xuất kinh doanh tại vùng khó khăn.',
        dapan4: 'Tất cả các đáp án trên đều sai.',
        ketqua: 'D',
      },
      {
        stt: '19',
        cauhoi:
          'Đối với  chương trình cho vay hộ nghèo, thời hạn gia hạn nợ tối đa đối với khoản vay ngắn hạn là bao nhiêu?',
        dapan1: '6 tháng. ',
        dapan2: '12 tháng.',
        dapan3: '1/2 thời hạn cho vay.',
        dapan4: 'Tất cả các đáp án trên đều sai.',
        ketqua: 'B',
      },
      {
        stt: '20',
        cauhoi:
          'Lãi suất cho vay lưu vụ đối với chương trình cho vay hộ nghèo bằng bao nhiêu?',
        dapan1:
          'Lãi suất cho vay hộ nghèo hiện hành tại thời điểm cho vay lưu vụ.  ',
        dapan2: 'Lãi suất cho vay ban đầu.',
        dapan3: '120% lãi suất cho vay ban đầu.',
        dapan4: '125% lãi suất cho vay ban đầu.',
        ketqua: 'A',
      },
      {
        stt: '21',
        cauhoi:
          'Mức cho vay tối đa đối với chương trình cho vay hộ cận nghèo là bao nhiêu?',
        dapan1: '30 triệu đồng/hộ.',
        dapan2: '50 triệu đồng/hộ. ',
        dapan3: '60 triệu đồng/hộ. ',
        dapan4: '100 triệu đồng/hộ. ',
        ketqua: 'D',
      },
      {
        stt: '22',
        cauhoi:
          'Thẩm quyền quyết định về mức cho vay tối đa đối với chương trình cho vay hộ cận nghèo là ai? ',
        dapan1: 'Tổng Giám đốc NHCSXH.',
        dapan2: 'Hội đồng Quản trị NHCSXH.',
        dapan3: 'Thủ tướng Chính phủ. ',
        dapan4: 'Chính phủ.',
        ketqua: 'C',
      },
      {
        stt: '23',
        cauhoi:
          'Đối tượng được thụ hưởng chương trình cho vay hộ mới thoát nghèo có thời gian tối đa kể từ khi ra khỏi danh sách hộ nghèo, danh sách hộ cận nghèo tối đa là bao nhiêu năm?',
        dapan1: '01 năm.',
        dapan2: '02 năm.',
        dapan3: '03 năm.',
        dapan4: '05 năm.',
        ketqua: 'C',
      },
      {
        stt: '24',
        cauhoi:
          'Lãi suất cho vay đối với hộ mới thoát nghèo bằng bao nhiêu phần trăm (%) lãi suất cho vay của hộ nghèo quy định trong từng thời kỳ?',
        dapan1: '120%.',
        dapan2: '125%.',
        dapan3: '130%.',
        dapan4: '135%.',
        ketqua: 'B',
      },
      {
        stt: '25',
        cauhoi:
          'Điều kiện cho vay lưu vụ đối với chương trình cho vay hộ mới thoát nghèo?',
        dapan1:
          'Khoản vay đã đến hạn nhưng hộ vay vẫn còn nhu cầu vay vốn cho chu kỳ sản xuất, kinh doanh liền kề.',
        dapan2: 'Phương án đang vay có hiệu quả. ',
        dapan3:
          'Hộ vay trả đủ số lãi còn nợ của khoản vay trước và thoát nghèo chưa bền vững.',
        dapan4: 'Tất cả các đáp án trên đều sai.',
        ketqua: 'D',
      },
      {
        stt: '26',
        cauhoi:
          'Mức cho vay tối đa đối với người lao động đi làm việc ở nước ngoài bằng bao nhiêu % tổng chi phí ghi trên Hợp đồng?',
        dapan1: '70%.',
        dapan2: '80%.',
        dapan3: '90%.',
        dapan4: '100%.',
        ketqua: 'D',
      },
      {
        stt: '27',
        cauhoi:
          'Hộ nghèo nếu đủ điều kiện vay vốn, có thể đồng thời được vay vốn các chương trình nào sau đây?',
        dapan1:
          'Cho vay hộ nghèo; cho vay nước sạch vệ sinh môi trường nông thôn; cho vay hộ cận nghèo.',
        dapan2:
          'Cho vay hộ nghèo; cho vay Học sinh sinh viên; cho vay nước sạch vệ sinh môi trường nông thôn.',
        dapan3:
          'Cho vay hộ mới thoát nghèo; cho vay xuất khẩu lao động; cho vay hộ nghèo.',
        dapan4: 'Tất cả các đáp án trên đều sai.',
        ketqua: 'B',
      },
      {
        stt: '28',
        cauhoi:
          'Đến hạn trả nợ theo phân kỳ đối với chương trình cho vay hộ nghèo, nếu người vay chưa trả được nợ thì xử lý như thế nào? ',
        dapan1: 'Cưỡng chế tài sản.',
        dapan2: 'Được xóa nợ.',
        dapan3: 'Được giảm trừ 50% số tiền gốc trong kỳ hạn trả nợ tiếp theo',
        dapan4: 'Được theo dõi vào kỳ hạn trả nợ tiếp theo.',
        ketqua: 'D',
      },
      {
        stt: '29',
        cauhoi:
          ' Chương trình cho vay nào dưới đây được áp dụng cơ chế cho vay bổ sung để khôi phục sản xuất, kinh doanh đối với khách hàng bị rủi ro do nguyên nhân khách quan?',
        dapan1:
          'Chương trình cho vay hộ sản xuất kinh doanh tại vùng khó khăn.',
        dapan2: 'Chương trình cho vay hộ nghèo.',
        dapan3: 'Chương trình cho vay giải quyết việc làm.',
        dapan4:
          'Chương trình cho vay nước sạch và vệ sinh môi trường nông thôn.',
        ketqua: 'B',
      },
      {
        stt: '30',
        cauhoi:
          'Việc thay đổi người đại diện theo ủy quyền để đứng tên người vay không được thực hiện trong trường hợp nào? ',
        dapan1: 'Người vay chết.',
        dapan2: 'Người vay bị tuyên bố là chết.',
        dapan3: 'Người vay mất tích.',
        dapan4: 'Người vay đi làm ăn ở tỉnh, thành phố khác.',
        ketqua: 'D',
      },
      {
        stt: '1',
        cauhoi:
          'Năm 2020, gia đình ông N được UBND xã xác nhận là Hộ khó khăn về tài chính. Cùng năm con ông đỗ đại học 4 năm và ông đề nghị NHCSXH cho vay vốn theo quyết định số 157/2007/QĐ-TTg để con ông đi học ngay từ năm học đầu tiên. Hãy xác định thời gian cho vay tối đa đối với hộ ông N?',
        dapan1: '60 tháng',
        dapan2: '72 tháng',
        dapan3: '96 tháng',
        dapan4: '108 tháng',
        ketqua: 'D',
      },
      {
        stt: '2',
        cauhoi:
          'Một hộ gia đình thuộc đối tượng hộ nghèo có nhu cầu vay vốn chương trình cho vay HSSV tại NHCSXH cho con đi học Đại học 5 năm (2016-2021). NHCSXH có thể duyệt thời gian cho vay tối đa của hộ gia đình này là bao nhiêu năm?',
        dapan1: '9 năm ',
        dapan2: '10 năm                            ',
        dapan3: '11 năm',
        dapan4: '12 năm     ',
        ketqua: 'C',
      },
      {
        stt: '3',
        cauhoi:
          'Hộ gia đình chị H thuộc đối tượng hộ gia đình khó khăn về tài chính có con đi học đại học 5 năm (2016 - 2021), được NHCSXH phê duyệt cho vay chương trình tín dụng ngay từ năm đầu tiên. Đến năm học thứ ba con chị bị lưu ban 01 năm và năm đó gia đình tiếp tục khó khăn và có nhu cầu vay vốn tiếp. Hãy xác định thời hạn trả nợ tối đa của gia đình chị H đến năm nào?',
        dapan1: 'Năm 2027',
        dapan2: 'Năm 2028                ',
        dapan3: 'Năm 2029                      ',
        dapan4: 'Năm 2030',
        ketqua: 'C',
      },
      {
        stt: '4',
        cauhoi:
          'Anh N có bố bị ốm đau thường xuyên, mẹ anh qua đời từ năm anh lên 2 tuổi. Năm học 2018-2019, anh thi đỗ đại học Kinh tế Quốc dân. Hãy cho biết, để được vay vốn trực tiếp tại NHCSXH Anh N cần phải nộp những giấy tờ gì sau đây:',
        dapan1:
          'Giấy đề nghị vay vốn và Giấy chứng nhận tình trạng sức khỏe, bệnh tật của bố anh N tại bệnh viện huyện nơi bố anh sinh sống',
        dapan2:
          'Giấy đề nghị vay vốn, Giấy xác nhận của nhà trường (bản chính) cùng Giấy chứng nhận tình trạng sức khỏe, bệnh tật của bố anh N tại bệnh viện huyện nơi bố anh sinh sống.',
        dapan3:
          'Giấy đề nghị vay vốn, Giấy xác nhận của nhà trường (bản chính) cùng Giấy chứng nhận tình trạng sức khỏe, bệnh tật của bố anh N tại bệnh xá cấp xã nơi bố anh sinh sống.',
        dapan4:
          'Giấy đề nghị vay vốn và giấy xác nhận có chữ ký của Trưởng thôn nơi bố anh sinh sống về tình trạng sức khỏe, bệnh tật của bố anh N.',
        ketqua: 'B',
      },
      {
        stt: '5',
        cauhoi:
          'Theo quyết định số 157/2007/QĐ-TTg về việc cho vay đối với HSSV, thì thời hạn trả nợ tối đa của HSSV có thời gian đào tạo trên 01 năm là bao nhiêu?',
        dapan1: 'Bằng 02 lần thời hạn phát tiền vay.                      ',
        dapan2: 'Bằng thời hạn phát tiền vay.                     ',
        dapan3: 'Bằng 1/2 thời hạn phát tiền vay',
        dapan4:
          'Bằng thời gian chờ việc cộng với 1/2 lần thời hạn phát tiền vay.',
        ketqua: 'B',
      },
      {
        stt: '6',
        cauhoi:
          'Theo Quyết định số 157/2007/QĐ-TTg về việc cho vay đối với HSSV, thì thời gian trả nợ tối đa của HSSV có thời gian đào tạo đến 01 năm là bao nhiêu',
        dapan1: 'Bằng 02 lần thời hạn phát tiền vay                    ',
        dapan2: 'Bằng thời hạn phát tiền vay.',
        dapan3: 'Bằng 1/2 thời hạn phát tiền vay.',
        dapan4: 'Bằng thời hạn phát tiền vay cộng với thời gian chờ việc.',
        ketqua: 'A',
      },
      {
        stt: '7',
        cauhoi:
          'Theo quy định chương trình cho vay đối với HSSV theo Quyết định số 157/2007/QĐ-TTg, NHCSXH nơi cho vay và người vay thoả thuận định kỳ hạn trả nợ vào thời gian nào sau đây: ',
        dapan1: 'Khi HSSV kết thúc khóa học',
        dapan2: 'Khi giải ngân số tiền cho vay của kỳ học cuối cùng.',
        dapan3:
          'Khi người vay làm thủ tục vay vốn và được nhận món vay đầu tiên',
        dapan4: 'Không quá 12 tháng kể từ ngày HSSV kết thúc khoá học',
        ketqua: 'B',
      },
      {
        stt: '8',
        cauhoi:
          'Theo quy định hiện nay về cho vay đối với HSSV, Giấy xác nhận của nhà trường được sử dụng làm căn cứ để NHCSXH giải ngân cho mấy kỳ của năm học?',
        dapan1: 'Cho 02 kỳ của năm học đó',
        dapan2: 'Cho học kỳ I đầu của năm học đó',
        dapan3: 'Cho kỳ II của năm học đó.',
        dapan4: 'Được sử dụng cho tất cả các năm học',
        ketqua: 'A',
      },
      {
        stt: '9',
        cauhoi:
          'Theo quy định tại Quyết định số 31/2007/QĐ-TTg của Thủ tướng Chính phủ thì vùng khó khăn được thụ hưởng chính sách tín dụng đối với hộ gia đình sản xuất kinh doanh bao gồm?',
        dapan1:
          'Các xã được quy định theo Quyết định số 1010/QĐ-TTg ngày 10/8/2018 của Thủ tướng Chính phủ về đơn vị hành chính cấp xã thuộc vùng khó khăn.',
        dapan2:
          'Đơn vị hành chính cấp xã được quy định theo Quyết định số 1010/QĐ-TTg ngày 10/8/2018 của Thủ tướng Chính phủ về đơn vị hành chính cấp xã thuộc vùng khó khăn.',
        dapan3:
          'Đơn vị hành chính cấp xã, thôn đặc biệt khó khăn được quy định theo Quyết định số 1010/QĐ-TTg ngày 10/8/2018 của Thủ tướng Chính phủ về đơn vị hành chính cấp xã thuộc vùng khó khăn',
        dapan4:
          'Đơn vị hành chính cấp xã được quy định tại các Khoản 1,2,3,4 Điều 1 Quyết định số 1010/QĐ-TTg ngày 10/8/2018 của Thủ tướng Chính phủ về đơn vị hành chính cấp xã thuộc vùng khó khăn',
        ketqua: 'B',
      },
      {
        stt: '10',
        cauhoi:
          'Đối tượng nào sau đây được vay vốn chương trình cho vay đối với hộ gia đình sản xuất kinh doanh tại vùng khó khăn?',
        dapan1:
          'Các hộ gia đình không thuộc diện hộ nghèo thực hiện các hoạt động sản xuất, kinh doanh tại vùng khó khăn trong những lĩnh vực mà pháp luật không cấm.',
        dapan2:
          'Các hộ gia đình thuộc diện hộ nghèo thực hiện các hoạt động sản xuất, kinh doanh tại vùng khó khăn trong những lĩnh vực mà pháp luật không cấm.',
        dapan3:
          'Các hộ gia đình thuộc diện hộ cận nghèo thực hiện các hoạt động sản xuất, kinh doanh tại vùng khó khăn trong những lĩnh vực mà pháp luật không cấm',
        dapan4:
          'Các hộ gia đình không thuộc diện hộ mới thoát nghèo thực hiện các hoạt động sản xuất, kinh doanh tại vùng khó khăn trong những lĩnh vực mà pháp luật không cấm.',
        ketqua: 'A',
      },
      {
        stt: '11',
        cauhoi:
          'Dự án hoặc phương án SXKD của hộ gia đình vay vốn chương trình cho vay Hộ SXKD tại vùng khó khăn do cơ quan nào sau đây xác nhận?',
        dapan1:
          'UBND cấp xã nơi người vay cư trú hợp pháp sẽ thực hiện việc xác nhận dự án, phương án sản xuất kinh doanh tại vùng khó khăn của hộ gia đình',
        dapan2: 'UBND cấp xã nơi hộ gia đình đang sinh sống',
        dapan3: 'UBND cấp xã nơi hộ gia đình có hộ khẩu thường trú',
        dapan4:
          'UBND cấp xã nơi hộ gia đình cư trú hợp pháp và UBND cấp xã nơi có hộ khẩu thường trú (trường hợp không sinh sống tại nơi có hộ khẩu).',
        ketqua: 'A',
      },
      {
        stt: '12',
        cauhoi:
          'Điều kiện để hộ gia đình được vay vốn chương trình cho vay đối với hộ gia đình sản xuất kinh doanh tại vùng khó khăn là gì?',
        dapan1:
          'Có dự án hoặc phương án sản xuất kinh doanh được UBND cấp xã nơi thực hiện dự án sản xuất, kinh doanh xác nhận; Có năng lực hành vi dân sự đầy đủ',
        dapan2:
          'Có năng lực hành vi dân sự đầy đủ; Cư trú hợp pháp tại nơi thực hiện dự án hoặc phương án sản xuất kinh doanh',
        dapan3:
          'Cư trú hợp pháp tại nơi thực hiện dự án hoặc phương án sản xuất kinh doanh; Có dự án hoặc phương án sản xuất kinh doanh được UBND cấp xã xác nhận.',
        dapan4:
          'Có dự án hoặc phương án sản xuất kinh doanh được UBND cấp xã nơi thực hiện dự án sản xuất, kinh doanh xác nhận; Có năng lực hành vi dân sự đầy đủ; Cư trú hợp pháp tại nơi thực hiện dự án hoặc phương án sản xuất kinh doanh',
        ketqua: 'D',
      },
      {
        stt: '13',
        cauhoi:
          'Để xác định thời hạn cho vay đối với chương trình tín dụng đối với hộ sản xuất kinh doanh tại vùng khó khăn, NHCSXH phải dựa vào căn cứ nào sau đây:',
        dapan1:
          'Chu kỳ sản xuất kinh doanh; đối tượng tham gia vào chu kỳ sản xuất kinh doanh; nguồn vốn cho vay của NHCSXH; khả năng trả nợ của người vay.',
        dapan2:
          'Nguồn vốn cho vay của NHCSXH; mục đích sử dụng vốn vay; thời hạn thu hồi vốn của phương án SXKD; khả năng trả nợ của người vay',
        dapan3:
          'Chu kỳ sản xuất kinh doanh; thời hạn thu hồi vốn của phương án SXKD; khả năng trả nợ của người vay; nguồn vốn cho vay của NHCSXH',
        dapan4:
          'Thời hạn thu hồi vốn của phương án SXKD; Chu kỳ sản xuất kinh doanh; nguồn vốn cho vay của NHCSXH, vốn tự có tham gia vào phương án sản xuất của người vay.',
        ketqua: 'C',
      },
      {
        stt: '14',
        cauhoi:
          'Đối với món cho vay trung và dài hạn của chương trình cho vay đối với hộ gia đình sản xuất kinh doanh tại vùng khó khăn, việc định kỳ hạn trả nợ được NHCSXH thực hiện như thế nào?',
        dapan1: '03 tháng hoặc 06 tháng/1 lần',
        dapan2: '06 tháng hoặc 12 tháng/1 lần',
        dapan3: '09 tháng hoặc 12 tháng/1 lần',
        dapan4: '12 tháng hoặc 24 tháng/1lần',
        ketqua: 'B',
      },
      {
        stt: '15',
        cauhoi:
          'Việc cho vay lưu vụ của chương trình cho vay đối với hộ gia đình sản xuất kinh doanh tại vùng khó khăn được áp dụng với loại cho vay nào sau đây?',
        dapan1: 'Cho vay trung hạn',
        dapan2: '. Cho vay ngắn hạn',
        dapan3: 'Cho vay ngắn hạn và trung hạn',
        dapan4: 'Cho vay ngắn hạn, trung hạn và dài hạn',
        ketqua: 'B',
      },
      {
        stt: '16',
        cauhoi:
          'Mức cho vay đến 50 triệu đồng của chương trình cho vay hộ gia đình SXKD tại vùng khó khăn, thì việc kiểm tra, giám sát do cơ quan nào sau đây thực hiện?',
        dapan1:
          'Ngân hàng Chính sách xã hội nơi cho vay, Hội đoàn thể và Ban giảm nghèo cấp xã.',
        dapan2:
          'Ngân hàng Chính sách xã hội nơi cho vay, Tổ chức chính trị xã hội cấp xã nhận ủy thác.',
        dapan3:
          'Ngân hàng Chính sách xã hội nơi cho vay; Tổ chức chính trị xã hội cấp xã nhận ủy thác; Tổ Tiết kiệm và vay vốn',
        dapan4:
          'Ngân hàng Chính sách xã hội nơi cho vay, Tổ Tiết kiệm và vay vốn và Ban giảm nghèo cấp xã. ',
        ketqua: 'C',
      },
      {
        stt: '17',
        cauhoi:
          'Điều kiện vay vốn đối với thương nhân hoạt động thương mại thường xuyên tại vùng khó khăn là gì?',
        dapan1:
          'Được Uỷ ban nhân dân cấp xã nơi thương nhân hoạt động thương mại xác nhận có thực hiện hoạt động thương mại thường xuyên trên địa bàn; Có vốn tự có tham gia tối thiểu bằng 20% tổng nhu cầu vốn vay cho hoạt động thương mại tại địa bàn vùng khó khăn; Thực hiện các biện pháp bảo đảm tiền vay theo quy định.',
        dapan2:
          'Được Uỷ ban nhân dân cấp xã nơi thương nhân hoạt động thương mại xác nhận có thực hiện hoạt động thương mại trên địa bàn; Có vốn tự có tham gia tối thiểu bằng 20% tổng nhu cầu vốn vay cho hoạt động thương mại tại địa bàn vùng khó khăn; Thực hiện các biện pháp bảo đảm tiền vay theo quy định',
        dapan3:
          'Có vốn tự có tham gia tối thiểu bằng 20% tổng nhu cầu vốn vay cho hoạt động thương mại tại địa bàn vùng khó khăn; Thực hiện các biện pháp bảo đảm tiền vay theo quy định',
        dapan4:
          'Được Uỷ ban nhân dân cấp xã xác nhận có thực hiện hoạt động thương mại trên địa bàn; Có vốn tự có tham gia tối thiểu bằng 20% tổng nhu cầu vốn vay cho hoạt động thương mại tại địa bàn vùng khó khăn; Thực hiện các biện pháp bảo đảm tiền vay theo quy định.',
        ketqua: 'A',
      },
      {
        stt: '18',
        cauhoi:
          'Một hộ gia đình có hộ khẩu thường trú tại thị trấn Tuần Giáo, huyện Tuần Giáo, tỉnh Điện Biên, đề nghị vay vốn chương trình nước sạch và vệ sinh môi trường nông thôn tại NHCSXH. Theo quy định hiện nay, NH phê duyệt cho vay tối đa như thế nào?',
        dapan1: 'Cho vay 06 triệu đồng',
        dapan2: 'Cho vay 12 triệu đồng',
        dapan3: 'Cho vay 20 triệu đồng',
        dapan4: 'Không cho vay',
        ketqua: 'D',
      },
      {
        stt: '19',
        cauhoi:
          'Khi vay vốn chương trình nước sạch và vệ sinh môi trường nông thôn tại NHCSXH, hộ vay KHÔNG cần phải có điều kiện nào sau đây:',
        dapan1:
          'Có hộ khẩu thường trú hoặc đăng ký tạm trú dài hạn tại khu vực nông thôn nơi NHCSXH đóng trụ sở ',
        dapan2: 'Chưa có công trình nước sạch và vệ sinh môi trường nông thôn',
        dapan3:
          'Đã có công trình nước sạch và vệ sinh môi trường nông thôn nhưng chưa đạt tiêu chuẩn quốc gia về nước sạch và chưa đảm bảo vệ sinh môi trường nông thôn được Ủy ban nhân dân cấp xã xác nhận',
        dapan4: 'Phải có tài sản thế chấp',
        ketqua: 'D',
      },
      {
        stt: '20',
        cauhoi:
          'Ngày 01/06/2020, Gia đình Ông A sinh sống tại khu vực nông thôn, đề nghị vay 16 triệu đồng để xây dựng công trình nước sạch và sửa chữa công trình vệ sinh. Hãy xác định mức phê duyệt cho vay tối đa là bao nhiêu?',
        dapan1: '06 triệu đồng           ',
        dapan2: '12 triệu đồng',
        dapan3: '16 triệu đồng ',
        dapan4: '20 triệu đồng',
        ketqua: 'C',
      },
      {
        stt: '21',
        cauhoi:
          'Một hộ gia đình hộ khẩu thường trú tại khu vực nông thôn, đề nghị vay vốn để xây dựng công trình nước sạch. Hãy xác định mức phê duyệt cho vay tối đa?',
        dapan1: '20 triệu đồng           ',
        dapan2: '12 triệu đồng',
        dapan3: '10 triệu đồng',
        dapan4: '06 triệu đồng',
        ketqua: 'C',
      },
      {
        stt: '22',
        cauhoi:
          'Theo quy định hiện hành chương trình cho vay nước sạch và vệ sinh môi trường nông thôn, việc thu nợ gốc được thực hiện như thế nào?',
        dapan1: 'Thu hết 1 lần vào kỳ cuối cùng',
        dapan2:
          'Theo phân kỳ trả nợ đã thỏa thuận. Trường hợp khách hàng không trả được số nợ của kỳ hạn trước có thể được chuyển trả vào kỳ hạn tiếp theo',
        dapan3: 'Thu nợ 01 năm một lần',
        dapan4:
          'Theo phân kỳ trả nợ đã thỏa thuận. Trường hợp khách hàng không trả được số nợ của kỳ hạn trước có thể được chuyển trả vào kỳ hạn cuối cùng',
        ketqua: 'B',
      },
      {
        stt: '23',
        cauhoi:
          'Một hộ gia đình vay vốn chương trình nước sạch và vệ sinh môi trường nông thôn với thời hạn 48 tháng. Đến hạn trả nợ cuối cùng hộ vay chưa trả được nợ và đề nghị NHCSXH cho gia hạn nợ 25 tháng. Hãy xác định thời gian cho gia hạn nợ tối đa là bao nhiêu?',
        dapan1: '12 tháng ',
        dapan2: '24 tháng',
        dapan3: '25 tháng ',
        dapan4: '36 tháng  ',
        ketqua: 'B',
      },
      {
        stt: '24',
        cauhoi:
          'Đối tượng nào sau đây KHÔNG thuộc đối tượng cho vay chương trình nước sạch và vệ sinh môi trường nông thôn?',
        dapan1:
          'Hộ gia đình thuộc khu vực nông thôn chưa có công trình nước sạch và công trình vệ sinh được UBND cấp xã xác nhận  ',
        dapan2:
          'Hộ gia đình thuộc khu vực nông thôn đã công trình nước sạch nhưng chưa đạt chuẩn quốc gia về nước sạch được UBND cấp xã xác nhận',
        dapan3:
          'Hộ gia đình đăng ký tạm trú dài hạn tại khu vực nông thôn đã có công trình vệ sinh nhưng chưa đảm bảo vệ sinh môi trường nông thôn được UBND cấp xã xác nhận',
        dapan4:
          'Hộ gia đình thuộc khu vực đô thị chưa có công trình nước sạch và công trình vệ sinh được UBND cấp xã xác nhận',
        ketqua: 'D',
      },
      {
        stt: '25',
        cauhoi:
          'Hộ gia đình nào sau đây KHÔNG nằm trong phạm vi được vay vốn của chương trình cho vay nước sạch và vệ sinh MTNT?',
        dapan1:
          'Có hộ khẩu thường trú tại khu vực nông thôn nơi chi nhánh NHCSXH đóng trụ sở',
        dapan2:
          'Có đăng ký tạm trú dài hạn tại khu vực nông thôn nơi chi nhánh NHCSXH đóng trụ sở',
        dapan3:
          'Có hộ khẩu thường trú hoặc đăng ký tạm trú dài hạn tại khu vực nông thôn nơi chi nhánh NHCSXH đóng trụ sở',
        dapan4:
          'Có hộ khẩu thường trú tại phường thuộc thị xã nơi chi nhánh NHCSXH đóng trụ sở',
        ketqua: 'D',
      },
      {
        stt: '26',
        cauhoi:
          'Mức cho vay tối đa đối với người lao động vay vốn chương trình cho vay vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm là bao nhiêu?',
        dapan1: '20 triệu đồng',
        dapan2: '30 triệu đồng',
        dapan3: '50 triệu đồng',
        dapan4: '100 triệu đồng',
        ketqua: 'D',
      },
      {
        stt: '27',
        cauhoi:
          'Mức cho vay tối đa đối với cơ sở sản xuất, kinh doanh vay vốn chương trình cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm là bao nhiêu?',
        dapan1:
          '02 tỷ đồng/dự án và không quá 100 triệu đồng cho 01 người lao động được tạo việc làm, duy trì và mở rộng việc làm',
        dapan2:
          '02 tỷ đồng/dự án và không quá 50 triệu đồng cho 01 người lao động được tạo việc làm, duy trì và mở rộng việc làm',
        dapan3:
          '01 tỷ đồng/dự án và không quá 100 triệu đồng cho 01 người lao động được tạo việc làm, duy trì và mở rộng việc làm',
        dapan4:
          '01 tỷ đồng/dự án và không quá 50 triệu đồng cho 01 người lao động được tạo việc làm, duy trì và mở rộng việc làm',
        ketqua: 'A',
      },
      {
        stt: '28',
        cauhoi:
          'Cơ sở sản xuất, kinh doanh vay vốn chương trình cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm phải thực hiện bảo đảm tiền vay từ mức vay nào sau đây:',
        dapan1: 'Trên 50 triệu đồng',
        dapan2: 'Từ 100 triệu đồng',
        dapan3: 'Trên 100 triệu đồng',
        dapan4: 'Tất cả các các món vay ',
        ketqua: 'B',
      },
      {
        stt: '29',
        cauhoi:
          'Người lao động vay vốn chương trình cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm KHÔNG cần điều kiện nào sau đây:',
        dapan1:
          'Cư trú hợp pháp tại địa phương (xã, phường, thị trấn) nơi thực hiện dự án',
        dapan2: 'Có năng lực hành vi dân sự đầy đủ',
        dapan3: 'Có tài sản bảo đảm tiền vay theo quy định của pháp luật\r\n',
        dapan4:
          'Có nhu cầu vay vốn để tạo việc làm, duy trì và mở rộng việc làm, có xác nhận của cơ quan, tổ chức có thẩm quyền nơi thực hiện dự án',
        ketqua: 'C',
      },
      {
        stt: '30',
        cauhoi:
          'Thời hạn cho vay tối đa đối với chương trình cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm là bao nhiêu tháng?',
        dapan1: '12 tháng',
        dapan2: '36 tháng',
        dapan3: '60 tháng',
        dapan4: '120 tháng',
        ketqua: 'D',
      },
      {
        stt: '31',
        cauhoi:
          'Đối với chương trình cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm, NHCSXH cho vay trực tiếp người lao động vay vốn thuộc nguồn vốn của cấp quản lý nào sau đây:',
        dapan1: 'Tổng Liên đoàn lao động Việt Nam, ',
        dapan2: 'UBND cấp tỉnh, ',
        dapan3: 'Hội Phụ nữ Việt Nam',
        dapan4: 'Hội Nông dân Việt Nam',
        ketqua: 'A',
      },
      {
        stt: '32',
        cauhoi:
          'Đối với chương trình cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm, NHCSXH KHÔNG thực hiện phương thức cho vay trực tiếp tại trụ sở NHCSXH nơi cho vay đối với đối tượng nào sau đây:',
        dapan1: 'Đối với cơ sở sản xuất, kinh doanh',
        dapan2:
          'Đối với người lao động vay vốn thuộc nguồn vốn do Tổng Liên đoàn lao động Việt Nam quản lý',
        dapan3:
          'Người lao động vay vốn thuộc nguồn vốn do Liên minh Hợp tác xã Việt Nam quản lý',
        dapan4:
          'Đối với người lao động vay vốn thuộc nguồn vốn do Uỷ ban nhân dân cấp tỉnh quản lý',
        ketqua: 'D',
      },
      {
        stt: '33',
        cauhoi:
          'Người lao động là người mù vay vốn chương trình cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm thuộc nguồn vốn do Hội Người mù Việt Nam quản lý, phải gửi hồ sơ vay vốn theo quy định đến đơn vị nào sau đây:',
        dapan1: 'Hội người mù cấp huyện',
        dapan2: ' Hội, đoàn thể cấp xã nhận ủy thác với NHCSXH',
        dapan3:
          'Tổ Trưởng Tổ TK&VV nơi cư trú hợp pháp của người lao động là người mù',
        dapan4: 'Trụ sở NHCSXH nơi cho vay',
        ketqua: 'A',
      },
      {
        stt: '34',
        cauhoi:
          'Người lao động vay vốn thuộc nguồn vốn do Hội Nông dân Việt Nam quản lý gửi hồ sơ vay vốn đến Tổ tiết kiệm và vay vốn thuộc Hội Phụ nữ cấp xã quản lý theo ủy thác của NHCSXH,  đơn vị nào lập báo cáo thẩm định theo mẫu 05b/GQVL?',
        dapan1: 'Cán bộ Hội nông dân cấp xã',
        dapan2: 'Cán bộ Hội Phụ nữ cấp xã ',
        dapan3: 'Cán bộ NHCSXH nơi cho vay',
        dapan4: 'Không phải lập báo cáo thẩm định ',
        ketqua: 'D',
      },
      {
        stt: '35',
        cauhoi:
          'Một hộ cận nghèo có hộ khẩu thường trú tại tỉnh A có nhu cầu vay 500 triệu đồng chương trình cho vay ưu đãi nhà ở xã hội tại NHCSXH để mua nhà ở xã hội tại thành phố B. Giá trị hợp đồng mua bán nhà ở là 700 triệu đồng. NHCSXH phê duyệt như thế nào?',
        dapan1: 'Cho vay tối đa 490 triệu đồng',
        dapan2: 'Cho vay tối đa 500 triệu đồng',
        dapan3: 'Cho vay tối đa là 560 triệu đồng',
        dapan4: 'Không phê duyệt cho vay',
        ketqua: 'D',
      },
      {
        stt: '36',
        cauhoi:
          'Tại huyện X, Ông Nam có hộ khẩu thường trú tại xã A và có giấy chứng nhận Quyền sử dụng đất ở và quyền sở hữu nhà ở tại xã B. Ông đề nghị vay vốn chương trình nhà ở xã hội tại NHCSXH với số tiền là 460 triệu đồng để xây dựng mới nhà để ở trên mảnh đất thuộc xã B, biết rằng tổng giá trị dự toán công trình là 700 triệu đồng. NHCSXH phê duyệt như thế nào?',
        dapan1: 'Cho vay tối đa là 460 triệu đồng.',
        dapan2: 'Cho vay tối đa là 490 triệu đồng',
        dapan3: 'Cho vay tối đa là 560 triệu đồng',
        dapan4: 'Không phê duyệt cho vay.',
        ketqua: 'A',
      },
      {
        stt: '37',
        cauhoi:
          'Ông A thuộc đối tượng được vay vốn ưu đãi nhà ở xã hội, đề nghị NHCSXH cho vay 540 triệu đồng để mua căn hộ thuộc dự án nhà ở xã hội, giá trị căn hộ trên Hợp đồng mua bán là 700 triệu đồng, người vay đã nộp 230 triệu đồng cho chủ đầu tư. Mức phê duyệt cho vay tối đa là bao nhiêu?',
        dapan1: '470 triệu đồng',
        dapan2: '500 triệu đồng',
        dapan3: '540 triệu đồng',
        dapan4: '560 triệu đồng',
        ketqua: 'A',
      },
      {
        stt: '38',
        cauhoi:
          'Gia đình Ông Nguyễn Văn Sơn thuộc đối tượng vay vốn nhà ở xã hội, ông đã được vay vốn ưu đãi về nhà ở cho hộ nghèo. Nay ông đề nghị NHCSXH cho vay 200 triệu đồng để sửa chữa ngôi nhà này. Tổng giá trị dự toán công trình là 400 triệu đồng. NHCSXH phê duyệt như thế nào?',
        dapan1: '   Cho vay tối đa là 200 triệu đồng.',
        dapan2: 'Cho vay tối đa là 280 triệu đồng',
        dapan3: 'Cho vay tối đa là 320 triệu đồng',
        dapan4: 'Không phê duyệt cho vay',
        ketqua: 'D',
      },
      {
        stt: '39',
        cauhoi:
          'Ông B được NHCSXH cho vay chương trình nhà ở xã hội, đến hạn trả nợ cuối cùng là ngày 30/11/2021. Giả sử đến thời điểm đó ông B gặp khó khăn chưa trả được và đề nghị NHCSXH nơi cho vay gia hạn nợ. Hãy xác định thời gian cho gia hạn nợ tối đa theo mốc nào sau đây:',
        dapan1: '30/11/2021',
        dapan2: '30/6/2021',
        dapan3: '30/11/2023',
        dapan4: '30/6/2024',
        ketqua: 'C',
      },
      {
        stt: '40',
        cauhoi:
          'Đối với chương trình cho vay nhà ở xã hội. Để vay vốn thuê mua nhà ở xã hội thì người vay vốn phải gửi cho NHCSXH nơi cho vay biên bản bàn giao nhà ở giữa người vay vốn để thuê mua nhà ở xã hội với chủ đầu tư tại thời điểm nào sau đây:',
        dapan1: '\tTrước khi kiểm tra tiến độ công trình',
        dapan2: 'Trước khi giải ngân lần thứ hai',
        dapan3: 'Trước mỗi lần giải ngân',
        dapan4: 'Trước khi giải ngân lần đầu',
        ketqua: 'D',
      },
      {
        stt: '41',
        cauhoi:
          'Đối với chương trình cho vay nhà ở xã hội. Để vay vốn xây dựng mới hoặc cải tạo, sửa chữa nhà để ở thì người vay phải có vốn tự có tối thiểu bằng bao nhiêu giá trị dự toán hoặc phương án tính toán giá thành?',
        dapan1: ' 10% giá trị dự toán hoặc phương án tính toán giá thành',
        dapan2: '20% giá trị dự toán hoặc phương án tính toán giá thành',
        dapan3: '\t30% giá trị dự toán hoặc phương án tính toán giá thành',
        dapan4: 'Không quy định',
        ketqua: 'C',
      },
      {
        stt: '42',
        cauhoi:
          'Đối với chương trình cho vay nhà ở xã hội, khi xem xét cho vay, đối tượng nào sau đây KHÔNG phải xác định về điều kiện thuộc diện nộp thuế thu nhập thường xuyên đối với thuế thu nhập cá nhân?',
        dapan1:
          'Cán bộ, công chức, viên chức theo quy định của pháp luật về cán bộ, công chức, viên chức',
        dapan2:
          'Người có công với cách mạng theo quy định của pháp luật về ưu đãi người có công với cách mạng ',
        dapan3:
          'Người lao động đang làm việc tại các doanh nghiệp trong và ngoài khu công nghiệp',
        dapan4:
          'Sĩ quan, hạ sĩ quan nghiệp vụ, hạ sĩ quan chuyên môn kỹ thuật, quân nhân chuyên nghiệp, công nhân trong cơ quan, đơn vị thuộc công an nhân dân và quân đội nhân dân',
        ketqua: 'B',
      },
      {
        stt: '43',
        cauhoi:
          'Theo hướng dẫn thực hiện bảo đảm tiền vay hiện nay của NHCSXH thì giao dịch bảo đảm là gì?',
        dapan1:
          '\tGiao dịch bảo đảm là hợp đồng cầm cố, thế chấp, bảo lãnh bằng tài sản theo đó bên bảo đảm cam kết với NHCSXH về việc dùng tài sản để bảo đảm thực hiện nghĩa vụ trả nợ',
        dapan2:
          'Giao dịch bảo đảm là giao dịch do bên bảo đảm và NHCSXH thỏa thuận về việc cầm cố tài sản hoặc thế chấp tài sản để bảo đảm thực hiện nghĩa vụ trả nợ',
        dapan3:
          'Giao dịch bảo đảm là hợp đồng thế chấp bằng tài sản theo đó bên bảo đảm cam kết với NHCSXH về việc dùng tài sản để bảo đảm thực hiện nghĩa vụ dân sự',
        dapan4:
          'Giao dịch bảo đảm là giao dịch dân sự do bên bảo đảm và NHCSXH thỏa thuận về việc cầm cố tài sản hoặc thế chấp tài sản để bảo đảm thực hiện nghĩa vụ trả nợ',
        ketqua: 'D',
      },
      {
        stt: '44',
        cauhoi:
          'Hiện nay, NHCSXH thực hiện những biện pháp bảo đảm tiền vay nào sau đây:',
        dapan1: 'Cầm cố tài sản',
        dapan2: 'Thế chấp tài sản',
        dapan3: 'Bảo lãnh',
        dapan4: 'Cầm cố và thế chấp tài sản',
        ketqua: 'B',
      },
      {
        stt: '45',
        cauhoi:
          'Hiện nay, mức cho vay tối đa so với giá trị tài sản thế chấp là bao nhiêu %?',
        dapan1: '70%',
        dapan2: '75%',
        dapan3: '80%',
        dapan4: '100%',
        ketqua: 'A',
      },
      {
        stt: '46',
        cauhoi:
          'Hiện nay, NHCSXH xử lý tài sản thế chấp theo những hình thức nào sau đây:',
        dapan1: '\tBán đấu giá tài sản',
        dapan2: 'Bên nhận bảo đảm tài sản tự bán tài sản',
        dapan3:
          '\tBên nhận bảo đảm tài sản, nhận chính tài sản đó để thay thế cho việc thực hiện nghĩa vụ của bên bảo đảm',
        dapan4: '\tBên có tài sản thế chấp thực hiện bán tài sản',
        ketqua: 'A',
      },
      {
        stt: '47',
        cauhoi:
          'Ông A có Giấy chứng nhận QSD đất, quyền sở hữu nhà ở và tài sản gắn liền với đất có diện tích 3ha tại thôn Phú Thượng, xã Hòa Sơn, huyện Hòa Vang, TP Đà Nẵng đang trồng cây lâu năm, được nhà nước giao đất không thu tiền sử dụng đất. Để xác định giá trị làm tài sản bảo đảm tiền vay, NHCSXH phải căn cứ vào thông tin nào sau đây:',
        dapan1: 'Khung giá đất do UBND thành phố Đà Nẵng quy định',
        dapan2: 'Khung giá đất do Bộ Xây dựng quy định tại thời điểm định giá',
        dapan3:
          'Khung giá đất do UBND thành phố Đà Nẵng quy định kết hợp tham khảo giá đất thị trường tại thời điểm xác định',
        dapan4:
          'Khung giá đất do Chính phủ quy định kết hợp tham khảo giá đất thị trường tại thời điểm xác định',
        ketqua: 'A',
      },
      {
        stt: '48',
        cauhoi:
          'Theo hướng dẫn bảo đảm tiền vay trong hệ thống NHCSXH, loại giấy tờ nào sau đây không nằm trong hồ sơ do NHCSXH và bên thế chấp cùng lập?',
        dapan1: 'Báo cáo thẩm định tài sản thế chấp',
        dapan2: 'Biên bản xác định giá trị tài sản thế chấp',
        dapan3: 'Hợp đồng thế chấp tài sản',
        dapan4:
          'Hồ sơ đăng ký biện pháp bảo đảm có xác nhận của cơ quan đăng ký biện pháp bảo đảm theo quy định',
        ketqua: 'A',
      },
      {
        stt: '49',
        cauhoi:
          'Theo hướng dẫn bảo đảm tiền vay trong hệ thống NHCSXH, trước khi phát tiền vay, NHCSXH nơi cho vay phải làm thủ tục nhập kho những loại giấy tờ nào sau đây:',
        dapan1:
          '\tBản chính Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất đã công chứng; Hợp đồng thế chấp tài sản đã công chứng',
        dapan2:
          '\tBản chính Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất đã công chứng; giấy tờ liên quan đến tài sản thế chấp',
        dapan3:
          '\tBản chính Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất; Hợp đồng thế chấp tài sản đã công chứng; giấy tờ liên quan đến tài sản thế chấp',
        dapan4:
          '\tBản chính Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất; Hợp đồng thế chấp tài sản đã công chứng; Hợp đồng tín dụng; giấy tờ liên quan đến tài sản thế chấp',
        ketqua: 'C',
      },
      {
        stt: '50',
        cauhoi:
          'Theo hướng dẫn thực hiện bảo đảm tiền vay, chi phí bán đấu giá tài sản do bên nào chi trả?',
        dapan1: 'Bên thế chấp ',
        dapan2: 'Bên nhận thế chấp',
        dapan3: 'Bên thế chấp và bên nhận thế chấp, mỗi bên 50% chi phí',
        dapan4: 'Bên thế chấp 70% chi phí và bên nhận thế chấp 30% chi phí',
        ketqua: 'A',
      },
      {
        stt: 'III. BAN KẾ HOẠCH NGUỒN VỐN (20 CÂU)',
      },
      {
        stt: '1',
        cauhoi:
          'NHCSXH cấp tỉnh gửi báo cáo kết quả thực hiện kế hoạch tín dụng năm trước cho NHCSXH Trung ương vào thời điểm nào sau đây:',
        dapan1: 'Chậm nhất ngày 05 tháng 01 năm sau.',
        dapan2: 'Chậm nhất ngày 10 tháng 01 năm sau.',
        dapan3: 'Chậm nhất ngày 15 tháng 01 năm sau.',
        dapan4: 'Chậm nhất ngày 20 tháng 01 năm sau.',
        ketqua: 'B',
      },
      {
        stt: '2',
        cauhoi:
          'Theo quy định tại Quyết định số 86/QĐ-NHCS ngày 10/01/2014 của Tổng Giám đốc, Giám đốc NHCSXH cấp tỉnh quyết định lãi suất huy động nhưng không được vượt quá mức lãi suất huy động cùng kỳ hạn, cùng thời điểm của: ',
        dapan1:
          'Ngân hàng Nông nghiệp và phát triển Nông thôn trên cùng địa bàn.',
        dapan2: 'Ngân hàng Đầu tư và Phát triển trên cùng địa bàn.',
        dapan3: 'Các Ngân hàng thương mại trên cùng địa bàn.',
        dapan4: 'Các Ngân hàng thương mại Nhà nước trên cùng địa bàn.',
        ketqua: 'D',
      },
      {
        stt: '3',
        cauhoi:
          'Nguồn vốn từ Hội sở chính NHCSXH chuyển về để phục vụ hoạt động giải ngân và thanh toán, NHCSXH cấp tỉnh được phép để vượt hạn mức Quỹ an toàn chi trả tối đa là bao nhiêu ngày làm việc:',
        dapan1: '05 ngày.',
        dapan2: '06 ngày.',
        dapan3: '07 ngày.',
        dapan4: '08 ngày.',
        ketqua: 'C',
      },
      {
        stt: '4',
        cauhoi: 'Quỹ An toàn chi trả của NHCSXH các cấp gồm:',
        dapan1: 'Tồn quỹ tiền mặt tại đơn vị và số dư tiền gửi tại NHNN.',
        dapan2:
          'Số dư tiền gửi tại các tổ chức tín dụng và số dư tiền gửi tại NHNN.',
        dapan3: 'Tồn quỹ tiền mặt và số dư tiền gửi tại các tổ chức tín dụng.',
        dapan4:
          'Tồn quỹ tiền mặt; số dư tiền gửi tại NHNN và tại các tổ chức tín dụng.',
        ketqua: 'D',
      },
      {
        stt: '5',
        cauhoi:
          'NHCSXH cấp tỉnh, cấp huyện chuyển phần vượt Quỹ an toàn chi trả về NHCSXH cấp trên khi nào?',
        dapan1: 'Cuối ngày làm việc.',
        dapan2: 'Vào ngày làm việc liền kề.',
        dapan3: 'Chậm nhất sau 02 ngày làm việc.',
        dapan4: 'Chậm nhất sau 03 ngày làm việc.',
        ketqua: 'B',
      },
      {
        stt: '6',
        cauhoi:
          'Ai chịu trách nhiệm tham mưu cho Giám đốc NHCSXH cấp huyện trích chuyển phần vượt hạn mức Quỹ an toàn chi trả cuối ngày tại đơn vị?',
        dapan1: 'Trưởng kế toán.',
        dapan2: 'Tổ trưởng Tổ Kế hoạch nghiệp vụ.',
        dapan3: 'Trưởng kế toán hoặc Tổ trưởng Tổ Kế hoạch nghiệp vụ.',
        dapan4: 'Trưởng kế toán và Tổ trưởng Tổ Kế hoạch nghiệp vụ.',
        ketqua: 'D',
      },
      {
        stt: '7',
        cauhoi:
          'NHCSXH cấp tỉnh lập điện báo đề nghị chuyển vốn gửi đơn vị nào sau đây:',
        dapan1: 'Sở giao dịch để thực hiện điều chuyển vốn.',
        dapan2:
          'Ban Kế toán và Quản lý tài chính để thực hiện điều chuyển vốn.',
        dapan3: 'Ban Kế hoạch nguồn vốn để thực hiện điều chuyển vốn.',
        dapan4: 'Ban Tài vụ để thực hiện điều chuyển vốn.',
        ketqua: 'A',
      },
      {
        stt: '8',
        cauhoi:
          'Ai tham mưu cho Trưởng ban đại diện HĐQT NHCSXH cấp huyện giao chỉ tiêu kế hoạch tín dụng cho cấp xã trên địa bàn? ',
        dapan1: 'Giám đốc NHCSXH cấp huyện.',
        dapan2: 'Chánh văn phòng UBND cấp huyện.',
        dapan3: 'Trưởng phòng tài chính cấp huyện.',
        dapan4:
          'Chủ tịch UBND cấp xã là thành viên Ban đại diện HĐQT NHCSXH cấp huyện',
        ketqua: 'A',
      },
      {
        stt: '9',
        cauhoi:
          'Ai tham mưu cho Chủ tịch UBND cấp xã giao chỉ tiêu kế hoạch tín dụng cho cấp thôn trên địa bàn? ',
        dapan1: 'Ban giảm nghèo cấp xã.',
        dapan2: 'Các tổ chức chính trị - xã hội nhận ủy thác cấp xã.',
        dapan3: 'Cán bộ tín dụng Ngân hàng được phân công theo dõi địa bàn xã.',
        dapan4: 'Trưởng thôn.',
        ketqua: 'C',
      },
      {
        stt: '10',
        cauhoi: 'Ai có thẩm quyền giao chỉ tiêu kế hoạch tín dụng cho cấp xã? ',
        dapan1: 'Ban đại diện HĐQT cấp huyện.',
        dapan2: 'Trưởng ban đại diện HĐQT cấp huyện.',
        dapan3: 'Giám đốc NHCSXH cấp huyện.',
        dapan4:
          'Trưởng Ban đại diện HĐQT cấp huyện hoặc Giám đốc NHCSXH cấp huyện.',
        ketqua: 'B',
      },
      {
        stt: '11',
        cauhoi:
          'Theo quy định hiện hành, chỉ tiêu kế hoạch tín dụng trên địa bàn cấp xã được giao đến: ',
        dapan1: 'Tổ tiết kiệm và vay vốn.',
        dapan2: 'Cấp thôn.',
        dapan3: 'Các tổ chức chính trị - xã hội cấp xã.',
        dapan4: 'Tổ TK&VV hoặc Trưởng thôn.',
        ketqua: 'B',
      },
      {
        stt: '12',
        cauhoi:
          'Thẩm quyền xem xét xử lý nợ bị rủi ro đối với nguồn vốn nhận ủy thác từ ngân sách cấp huyện do ai quyết định?',
        dapan1: 'Chủ tịch UBND cấp tỉnh.',
        dapan2: 'Chủ tịch UBND cấp huyện.',
        dapan3: 'Trưởng Ban đại diện HĐQT NHCSXH cấp tỉnh.',
        dapan4: 'Trưởng Ban đại diện HĐQT NHCSXH cấp huyện.',
        ketqua: 'B',
      },
      {
        stt: '13',
        cauhoi: 'Người gửi tiền tiết kiệm tại NHCSXH?',
        dapan1: 'Tổ chức kinh tế và cá nhân.',
        dapan2: 'Người cư trú và người không cư trú.',
        dapan3: 'Công dân Việt Nam và người nước ngoài.',
        dapan4: 'Công dân Việt Nam.',
        ketqua: 'D',
      },
      {
        stt: '14',
        cauhoi:
          'Giấy tờ xác minh thông tin của người gửi tiền trong giao dịch tiền gửi tiết kiệm là? ',
        dapan1:
          'Giấy chứng minh nhân dân hoặc Thẻ căn cước công dân hoặc Hộ chiếu còn thời hạn hiệu lực.',
        dapan2:
          'Giấy chứng minh nhân dân hoặc Thẻ căn cước công dân hoặc Hộ chiếu còn thời hạn hiệu lực hoặc Giấy khai sinh của cá nhân chưa đủ 14 tuổi.',
        dapan3:
          'Giấy chứng minh nhân dân hoặc Thẻ căn cước công dân hoặc Giấy khai sinh của cá nhân chưa đủ 14 tuổi hoặc Hộ chiếu/Giấy chứng minh quân đội/Thẻ quân nhân còn thời hạn hiệu lực. ',
        dapan4:
          'Giấy chứng minh nhân dân hoặc Thẻ căn cước công dân hoặc Giấy khai sinh của cá nhân chưa đủ 14 tuổi hoặc Hộ chiếu/Giấy chứng minh quân đội/Thẻ quân nhân/Giấy chứng nhận của lực lượng công an còn thời hạn hiệu lực. ',
        ketqua: 'B',
      },
      {
        stt: '15',
        cauhoi:
          'Địa điểm chi trả tiền gửi tiết kiệm của NHCSXH được thực hiện tại: ',
        dapan1: 'Trụ sở của NHCSXH nơi mở Thẻ tiết kiệm.',
        dapan2:
          'Trụ sở của NHCSXH nơi mở Thẻ tiết kiệm, tại địa điểm giao dịch hợp pháp (nơi mở thẻ tiết kiệm) của NHCSXH. ',
        dapan3:
          'Trụ sở của NHCSXH nơi mở Thẻ tiết kiệm, tại địa điểm giao dịch hợp pháp (nơi mở thẻ tiết kiệm) của NHCSXH và theo quy định về sản phẩm tiền gửi tiết kiệm của NHCSXH.',
        dapan4:
          'Trụ sở của NHCSXH nơi mở Thẻ tiết kiệm, tại địa điểm giao dịch hợp pháp (nơi mở thẻ tiết kiệm) của NHCSXH, tại nơi thường trú của người gửi tiền và theo quy định về sản phẩm tiền gửi tiết kiệm của NHCSXH.',
        ketqua: 'C',
      },
      {
        stt: '16',
        cauhoi:
          'Người gửi tiền tại NHCSXH có thể tra cứu khoản tiền gửi tiết kiệm tại đâu',
        dapan1: 'Trực tiếp tại trụ sở NHCSXH. ',
        dapan2: 'Tại địa điểm giao dịch nơi mở Thẻ tiết kiệm.',
        dapan3:
          'Trực tiếp tại trụ sở NHCSXH hoặc tại địa điểm giao dịch nơi mở Thẻ tiết kiệm.',
        dapan4:
          'Trực tiếp tại trụ sở NHCSXH hoặc tại địa điểm giao dịch nơi mở Thẻ tiết kiệm hoặc tra cứu trên website của NHCSXH.',
        ketqua: 'C',
      },
      {
        stt: '17',
        cauhoi:
          'Theo quy định hiện hành của Tổng Giám đốc, đối tượng nào KHÔNG phải đối tượng gửi tiền gửi có kỳ hạn tại NHCSXH:',
        dapan1: 'Tổ chức tín dụng.',
        dapan2:
          'Người nước ngoài được phép cư trú tại Việt Nam với thời hạn từ 12 tháng trở lên.',
        dapan3:
          'Cơ quan đại diện ngoại giao, cơ quan đại diện lãnh sự, cơ quan đại diện tại tổ chức quốc tế của Việt Nam ở nước ngoài.',
        dapan4:
          'Cơ quan nhà nước, đơn vị lực lượng vũ trang, tổ chức chính trị, tổ chức chính trị - xã hội, tổ chức chính trị xã hội - nghề nghiệp, tổ chức xã hội, tổ chức xã hội - nghề nghiệp, quỹ xã hội, quỹ từ thiện của Việt Nam hoạt động tại Việt Nam.',
        ketqua: 'A',
      },
      {
        stt: '18',
        cauhoi: 'Nơi giao dịch tiền gửi có kỳ hạn của NHCSXH được quy định là?',
        dapan1: 'Trụ sở Sở giao dịch NHCSXH, trụ sở chi nhánh NHCSXH cấp tỉnh.',
        dapan2:
          'Trụ sở Sở giao dịch NHCSXH, trụ sở chi nhánh NHCSXH cấp tỉnh, trụ sở Phòng giao dịch NHCSXH cấp huyện.',
        dapan3:
          'Trụ sở chi nhánh NHCSXH cấp tỉnh, trụ sở Phòng giao dịch NHCSXH cấp huyện, Điểm giao dịch tại xã của NHCSXH.',
        dapan4:
          'Trụ sở Sở giao dịch NHCSXH, trụ sở chi nhánh NHCSXH cấp tỉnh, trụ sở Phòng giao dịch NHCSXH cấp huyện, Điểm giao dịch tại xã của NHCSXH.',
        ketqua: 'B',
      },
      {
        stt: '19',
        cauhoi:
          'Đối tượng khách hàng nào sau đây phải thực hiện việc gửi, nhận chi trả tiền gửi có kỳ hạn thông qua người giám hộ tại NHCSXH:',
        dapan1: 'Người bị hạn chế năng lực hành vi dân sự.',
        dapan2:
          'Người có khó khăn trong nhận thức, làm chủ hành vi theo quy định của pháp luật.',
        dapan3:
          'Người bị hạn chế năng lực hành vi dân sự hoặc mất năng lực hành vi dân sự theo quy định của pháp luật.',
        dapan4:
          'Người bị hạn chế năng lực hành vi dân sự hoặc mất năng lực hành vi dân sự theo quy định của pháp luật hoặc chưa đủ 15 tuổi.',
        ketqua: 'B',
      },
      {
        stt: '20',
        cauhoi:
          'Theo quy định của sản phẩm tiết kiệm gửi góp linh hoạt: Đối với kỳ hạn 6 tháng, 9 tháng, 12 tháng lần gửi cuối cùng của người gửi tiền trước ngày đến hạn tối thiểu là?',
        dapan1: 'Không quy định.',
        dapan2: '03 tháng.',
        dapan3: '02 tháng.',
        dapan4: '01 tháng.',
        ketqua: 'D',
      },
      {
        stt: '1',
        cauhoi:
          'Theo Quyết định số 08/2021/QĐ-TTg ngày 11/3/2021 của Thủ tướng Chính phủ, khi khách hàng bị rủi ro do các nguyên nhân khách quan, trường hợp nào sau đây chưa đủ điều kiện xem xét xử lý xóa nợ:',
        dapan1:
          'Khách hàng có hoàn cảnh đặc biệt khó khăn không nơi nương tựa.',
        dapan2:
          'Các khoản nợ bị chiếm dụng mà người chiếm dụng chết, mất tích và không còn tài sản để trả nợ.',
        dapan3:
          'Khách hàng bị tuyên bố phá sản hoặc giải thể theo quy định của pháp luật.',
        dapan4:
          'Hết thời gian khoanh nợ, khách hàng vẫn không có khả năng trả nợ và ngân hàng đã áp dụng mọi biện pháp thu hồi',
        ketqua: 'A',
      },
      {
        stt: '2',
        cauhoi:
          'Theo Quyết định số 08/2021/QĐ-TTg ngày 11/3/2021 của Thủ tướng Chính phủ, thẩm quyền quyết định việc khoanh nợ, xoá nợ cho khách hàng trong trường hợp quy mô của đợt xoá nợ không vượt quá Qũy dự phòng rủi ro tại Ngân hàng Chính sách xã hội là:',
        dapan1: 'Chủ tịch Hội đồng quản trị Ngân hàng Chính sách xã hội',
        dapan2: 'Tổng giám đốc Ngân hàng Chính sách xã hội',
        dapan3: 'Hội đồng quản trị Ngân hàng Chính sách xã hội',
        dapan4: 'Thủ tướng Chính phủ',
        ketqua: 'C',
      },
      {
        stt: '3',
        cauhoi:
          'Khách hàng bị rủi ro do nguyên nhân khách quan chưa có khả năng trả nợ đúng hạn, theo Quyết định số 08/2021/QĐ-TTg các trường hợp nào sau đây được xem xét xoá nợ:',
        dapan1:
          'Hết thời gian khoanh nợ, khách hàng vẫn gặp khó khăn, chưa có khả năng trả nợ và ngân hàng đã áp dụng các biện pháp thu hồi',
        dapan2:
          'Có thành viên cùng tham gia ký kết hợp đồng vay vốn bị rủi ro do mắc bệnh tâm thần, mắc bệnh hiểm nghèo, mắc bệnh khác dẫn đến mất năng lực hành vi dân sự.',
        dapan3: 'Cả a và b',
        dapan4: 'Tất cả các phương án trên đều sai',
        ketqua: 'D',
      },
      {
        stt: '4',
        cauhoi:
          'Ngày 01/01/2017, một hộ gia đình vay vốn Ngân hàng Chính sách xã hội 50.000.000 đồng thời hạn vay vốn 48 tháng. Đến ngày 01/08/2021 người vay vốn được cơ quan chức năng tuyên bố là mất tích và người thừa kế không có khả năng trả nợ thay, theo Quyết định số 08/2021/QĐ-TTg ngày 11/3/2021 của Thủ tướng Chính phủ thì được xem xét áp dụng biện pháp xử lý nợ nào?',
        dapan1: 'Khoanh nợ 03 năm',
        dapan2: 'Xóa nợ',
        dapan3: 'Chuyển nợ quá hạn',
        dapan4: 'Gia hạn nợ',
        ketqua: 'A',
      },
      {
        stt: '5',
        cauhoi:
          'Theo Quy chế phân loại nợ tại Ngân hàng Chính sách xã hội, định kỳ 01 năm/lần NHCSXH thực hiện phân loại nợ với những tiêu chí nào?',
        dapan1:
          'Chương trình cho vay; Thời hạn cho vay; Trạng thái nợ; Hình thức bảo đảm tiền vay; khất lượng tín dụng; Hình thức cho vay và đơn vị nhận uỷ thác với NHCSXH; Khu vực cho vay; Theo dân tộc; Theo ngành kinh tế',
        dapan2:
          'Chương trình cho vay; Thời hạn cho vay; khả năng trả nợ; Hình thức bảo đảm tiền vay; Nguồn vốn cho vay; Hình thức cho vay và đơn vị nhận uỷ thác với NHCSXH; Khu vực cho vay; Theo dân tộc; Theo ngành kinh tế ',
        dapan3:
          'Chương trình cho vay; Thời hạn cho vay; Trạng thái nợ; Hình thức bảo đảm tiền vay; đối tượng cho vay; Hình thức cho vay và đơn vị nhận uỷ thác với NHCSXH; Khu vực cho vay; Theo dân tộc; Theo ngành kinh tế',
        dapan4:
          'Chương trình cho vay; Thời hạn cho vay; Trạng thái nợ; Hình thức bảo đảm tiền vay; Nguồn vốn cho vay; Hình thức cho vay và đơn vị nhận uỷ thác với NHCSXH; Khu vực cho vay; Theo dân tộc; Theo ngành kinh tế ',
        ketqua: 'D',
      },
      {
        stt: '6',
        cauhoi:
          'Theo Quy chế phân loại nợ tại Ngân hàng Chính sách xã hội, thời gian phân loại nợ theo khả năng trả nợ của khách hàng được thực hiện?',
        dapan1: 'Định kỳ 6 tháng/lần',
        dapan2: 'Định kỳ 1 năm/lần',
        dapan3:
          'Định kỳ 3 năm/lần hoặc xuất phát từ nhu cầu thực tế của NHCSXH',
        dapan4: 'Định kỳ 3 năm/lần',
        ketqua: 'C',
      },
      {
        stt: '7',
        cauhoi:
          'Quy trình đối chiếu, phân loại nợ theo khả năng trả nợ của khách hàng được thực hiện như thế nào? ',
        dapan1:
          'Xây dựng kế hoạch; Đối chiếu và phân loại theo khả năng trả nợ',
        dapan2:
          'Xây dựng kế hoạch; Đối chiếu và phân loại theo khả năng trả nợ; Tổng hợp kết quả phân loại',
        dapan3:
          'Xây dựng kế hoạch; Đối chiếu và phân loại theo khả năng trả nợ; Tổng hợp kết quả phân loại; Hội sở chính tổng hợp, báo cáo kết quả phân loại ',
        dapan4: 'Tất cả các phương án trên',
        ketqua: 'C',
      },
      {
        stt: '8',
        cauhoi:
          'Việc đối chiếu, phân loại nợ theo khả năng trả nợ của khách hàng được thực hiện theo trình tự nào?',
        dapan1:
          'Đối chiếu, ký xác nhận với khách hàng; đánh giá khả năng trả nợ của khách hàng; phân tích nguyên nhân trả/không trả nợ của khách hàng',
        dapan2:
          'Đối chiếu, đánh giá khả năng trả nợ của khách hàng; thống nhất và ký xác nhận với khách hàng; phân tích nguyên nhân của khách hàng',
        dapan3:
          'Đối chiếu, thống nhất và ký xác nhận với khách hàng; đánh giá khả năng trả nợ của khách hàng; phân tích nguyên nhân của khách hàng ',
        dapan4: 'Tất cả các phương án trên đều sai',
        ketqua: 'C',
      },
      {
        stt: '9',
        cauhoi:
          'Theo quy định hiện hành về phân loại nợ tại NHCSXH, những năm không thực hiện đối chiếu và phân loại nợ theo khả năng trả nợ của khách hàng, NHCSXH nơi cho vay phải tổ chức đối chiếu đạt tối thiểu bao nhiêu % trên tổng số món vay còn dư nợ tại ngân hàng?',
        dapan1: 'Tối thiểu 15% trên tổng số món vay còn dư nợ tại ngân hàng',
        dapan2: 'Tối thiểu 10 % trên tổng số món vay còn dư nợ tại ngân hàng',
        dapan3: 'Tối thiểu 5% trên tổng số món vay còn dư nợ tại ngân hàng',
        dapan4: 'Tối thiểu 20% trên tổng số món vay còn dư nợ tại ngân hàng',
        ketqua: 'A',
      },
      {
        stt: '10',
        cauhoi:
          'Theo quy định hiện hành về phân loại nợ tại NHCSXH, những năm không thực hiện đối chiếu và phân loại nợ theo khả năng trả nợ của khách hàng, NHCSXH nơi cho vay phải tổ chức đối chiếu tập trung vào những địa bàn nào? ',
        dapan1: 'Dư nợ lớn, nợ không có khả năng thu hồi cao, nợ quá hạn cao',
        dapan2:
          'Dư nợ lớn, nợ không có khả năng thu hồi cao, nợ quá hạn cao, các địa bàn dễ phát sinh tiêu cực',
        dapan3: 'Dư nợ lớn, nợ quá hạn cao, các địa bàn dễ phát sinh tiêu cực',
        dapan4:
          'Dư nợ lớn, nợ quá hạn và lãi tồn cao, các địa bàn dễ phát sinh tiêu cực',
        ketqua: 'B',
      },
      {
        stt: '1',
        cauhoi:
          'Theo quy định về đóng gói tiền mặt, khi đóng bó tiền cotton cùng mệnh giá, với mệnh giá từ 1.000 đồng trở lên, buộc tiền được thực hiện như thế nào?',
        dapan1: ' Buộc 2 ngang 2 dọc',
        dapan2: 'Buộc 4 ngang 1 dọc',
        dapan3: 'Buộc 3 ngang 1 dọc ',
        dapan4: 'Buộc 2 ngang 1 dọc ',
        ketqua: 'C',
      },
      {
        stt: '2',
        cauhoi:
          'Hình thức nào sau được áp dụng để thay chữ ký đối với trường hợp khách hành không biết chữ khi đến giao dịch với ngân hàng để thực hiện nộp hoặc lĩnh tiền mặt?',
        dapan1: 'Điểm chỉ ngón trỏ phải ',
        dapan2: 'Điểm chỉ ngón cái trái ',
        dapan3: 'Điểm chỉ ngón trỏ trái',
        dapan4: 'Điểm chỉ ngón cái phải',
        ketqua: 'C',
      },
      {
        stt: '3',
        cauhoi:
          'Trong giao dịch tiền mặt với khách hàng, khi phát hiện tiền giả, Thủ quỹ sẽ thực hiện công việc nào sau đây?',
        dapan1:
          'Lập biên bản về việc thu giữ tiền giả; thu giữ tiền tiền giả, đóng dấu và bấm lỗ tiền giả ',
        dapan2: 'Tạm thu giữ tiền giả, đóng dấu lên một mặt tờ tiền',
        dapan3: 'Lập biên bản về việc thu giữ tiền giả',
        dapan4:
          'Lập biên bản về việc thu giữ tiền giả; thu giữ tiền giả và đóng dấu lên 2 mặt tờ tiền',
        ketqua: 'A',
      },
      {
        stt: '4',
        cauhoi:
          'Bảo quản tiền mặt tại Tổ giao dịch xã được thực hiện như thế nào trường hợp không thể về được trong ngày, do địa bàn xa?',
        dapan1:
          'Tổ giao dịch xã bảo quản tiền mặt tại phòng làm việc do UBND xã bố trí',
        dapan2:
          'Tổ giao dịch xã gửi tiền mặt vào két sắt của Chủ tịch UBND xã nơi mở phiên giao dịch',
        dapan3: 'Tổ giao dịch xã để tiền mặt trên xe ô tô của ngân hàng',
        dapan4:
          'Tổ giao dịch xã có phương án phối hợp với Công an xã và Chính quyền địa phương để bảo vệ an toàn tiền mặt ',
        ketqua: 'D',
      },
      {
        stt: '5',
        cauhoi:
          'Ai là người quản lý và giữ chìa khóa một ổ khóa của lớp cánh trong cửa kho tiền?',
        dapan1: 'Giám đốc ',
        dapan2: 'Trưởng phòng Kế toán-Ngân quỹ/Trưởng Kế toán',
        dapan3: 'Thủ kho tiền ',
        dapan4: 'Giám đốc, Thủ kho tiền',
        ketqua: 'C',
      },
      {
        stt: '6',
        cauhoi:
          'Trong kho tiền, trường hợp không thể để hết tiền mặt trong két sắt thì phải thực hiện thế nào?',
        dapan1:
          'Cho toàn bộ số tiền còn lại vào két sắt tại quầy giao dịch bảo quản',
        dapan2:
          'Cho những loại tiền có mệnh giá lớn vào trong két sắt, những mệnh giá nhỏ cho vào hòm sắt có then cài ngang và khóa hai bên bảo quản trong kho tiền ',
        dapan3: 'Cho toàn bộ số tiền còn lại vào két sắt tại kho đệm bảo quản',
        dapan4:
          'Cho toàn bộ số tiền còn lại vào hòm tôn có then cài ngang và khóa hai bên bảo quản trong kho tiền.',
        ketqua: 'B',
      },
      {
        stt: '7',
        cauhoi:
          'Mở cửa kho tiền được thành viên Ban quản lý kho thực hiện theo thứ tự nào sau đây?',
        dapan1:
          'Thủ kho tiền, Trưởng phòng Kế toán - Ngân quỹ/Trưởng Kế toán, Giám đốc',
        dapan2:
          'Giám đốc, Thủ kho tiền, Trưởng phòng Kế toán-Ngân quỹ/Trưởng kế toán',
        dapan3:
          'Trưởng phòng Kế toán-Ngân quỹ/Trưởng Kế toán, Giám đốc, Thủ kho tiền',
        dapan4:
          'Giám đốc, Trưởng phòng Kế toán- Ngân quỹ/Trưởng kế toán, Thủ kho tiền',
        ketqua: 'D',
      },
      {
        stt: '8',
        cauhoi:
          'Cuối ngày, kết thúc buổi giao dịch, giao dịch viên (Teller) KHÔNG phải thực hiện công việc nào sau đây?',
        dapan1: 'Kiểm quỹ và đóng quỹ chính ',
        dapan2: 'Kiểm quỹ và điều tiền tồn quỹ về quỹ chính',
        dapan3: 'Đóng quỹ Teller',
        dapan4: 'Khóa phiên người sử dụng',
        ketqua: 'A',
      },
      {
        stt: '9',
        cauhoi:
          'Ai là người là người thực hiện ghi chép trong quá trình kiểm kê kho, ghi chép Sổ kiểm quỹ hàng ngày tại trụ sở NHCSXH cấp tỉnh, cấp huyện?',
        dapan1: 'Giám đốc',
        dapan2:
          'Trưởng phòng Kế toán-Ngân quỹ/Trưởng Kế toán hoặc người được ủy quyền ',
        dapan3: 'Thủ kho tiền/Thủ Quỹ',
        dapan4: 'Tổ trưởng Tổ giao dịch',
        ketqua: 'B',
      },
      {
        stt: '10',
        cauhoi:
          'Trong khoảng thời gian nào, phải điện báo cáo về NHCSXH cấp trên khi đơn vị phát hiện xảy ra việc thiếu, mất tiền mặt, ngoại tệ, giấy tờ có giá có giá trị từ 50 (năm mươi) triệu đồng trở lên trong kho tiền, trong quá trình vận chuyển, tại quầy giao dịch?',
        dapan1: 'Trong 5h ',
        dapan2: 'Trong 12h',
        dapan3: 'Trong 24h',
        dapan4: 'Trong ngày ',
        ketqua: 'B',
      },
      {
        stt: '11',
        cauhoi:
          'Mức phí quản lý từng năm áp dụng đối với phòng giao dịch NHCSXH cấp huyện được thực hiện như thế nào?',
        dapan1: 'Theo mức phí quản lý Thủ tướng giao cho NHCSXH ',
        dapan2: 'Theo mức phí quản lý do Tổng giám đốc giao cho chi nhánh',
        dapan3:
          'Giám đốc Phòng giao dịch tự tính toán dựa trên cơ sở mức phí quản lý được Tổng Giám đốc giao cho chi nhánh',
        dapan4: 'Theo mức phí quản lý do Giám đốc chi nhánh giao',
        ketqua: 'D',
      },
      {
        stt: '12',
        cauhoi:
          'Tổng quỹ tiền lương đạt được của đơn vị nhận khoán tài chính với Hội sở chính được xác định như thế nào?',
        dapan1: 'Bằng: Chênh lệch thu trừ (-) chi chưa có lương',
        dapan2:
          'Bằng: Chênh lệch thu trừ (-) chi chưa có lương x tỷ lệ sử dụng để trích lập quỹ tiền lương (tỷ lệ sử dụng để trích lập quỹ tiền lương do TGĐ thông báo cụ thể hàng năm)',
        dapan3:
          'Bằng: Chênh lệch thu trừ (-) chi chưa có lương x tỷ lệ sử dụng để trích lập quỹ tiền lương là 85%',
        dapan4:
          'Bằng: Chênh lệch thu trừ (-) chi chưa có lương x tỷ lệ sử dụng để trích lập quỹ tiền lương là 50%',
        ketqua: 'B',
      },
      {
        stt: '13',
        cauhoi:
          'Theo quy định hiện nay, số phí điều hòa vốn được tính như thế nào để xác định kết quả tài chính tại đơn vị nhận khoán với Hội sở chính? ',
        dapan1:
          'Bằng: Dư nợ bình quân các chương trình sử dụng vốn TW trừ (-) Số dư bình quân tính theo tích số của các khoản tạm ứng (TK36), tồn quỹ tiền mặt (TK 10), tiền gửi (TK 11,TK12, TK13) ',
        dapan2:
          'Bằng: (Dư nợ bình quân các chương trình sử dụng vốn TW cộng  (+) Số dư bình quân tính theo tích số của các khoản tạm ứng (TK36), tồn quỹ tiền mặt (TK 10), tiền gửi (TK 11,TK12, TK13)) x Mức phí điều hòa vốn',
        dapan3:
          'Bằng: (Tổng tích số trong kỳ tài khoản  4413 trừ (-) Tổng tích số trong kỳ các tài khoản TK253, TK291, TK292, TK293) (x) Mức phí huy động vốn',
        dapan4:
          'Bằng: (Số dư nguồn vốn bình quân các tài khoản (TK40, TK41, TK42, TK43) nhân (x) (Mức phí huy động vốn cộng (+) Tỷ lệ thưởng (nếu có))',
        ketqua: 'B',
      },
      {
        stt: '14',
        cauhoi:
          'Chi trả kinh phí quản lý cho cơ quan Lao động-Thương binh và Xã hội các cấp khi cho vay bằng nguồn vốn Quỹ quốc gia về việc làm (quy định tại Thông tư số 54/2016/TT-BTC ngày 21/3/2016 của Bộ Tài chính) tại Sở giao dịch NHCSXH thực hiện như thế nào?',
        dapan1:
          'Chi trả 0,3% tính trên tổng số tiền lãi thu được của Chương trình cho vay giải quyết việc làm bằng nguồn vốn của Quỹ quốc gia về việc làm và nguồn NHCSXH huy động',
        dapan2:
          'Chi trả 0,01% tính trên dư nợ cho vay bình quân Chương trình cho vay giải quyết việc làm bằng nguồn vốn của Quỹ quốc gia về việc làm',
        dapan3:
          'Chi trả 0,3% tính trên tổng số tiền lãi thu được của Chương trình cho vay giải quyết việc làm bằng nguồn vốn của Quỹ quốc gia về việc làm',
        dapan4: 'Không có phương án nào đúng',
        ketqua: 'C',
      },
      {
        stt: '15',
        cauhoi:
          'Tài khoản nào được hạch toán khi chi xăng dầu cho phương tiện vận chuyển tiền hoặc chi thuê phương tiện vận chuyển tiền (áp dụng cho xe ô tô chuyên dùng) để vận chuyển tiền từ chi nhánh NHCSXH cấp tỉnh đến Phòng giao dịch NHCSXH cấp huyện và ngược lại)?',
        dapan1: 'Chi xăng dầu và chi phí phương tiện vận chuyển',
        dapan2: 'Chi khác cho hoạt động quản lý, công vụ',
        dapan3: 'Chi phí khác',
        dapan4: 'Chi ngân quỹ',
        ketqua: 'D',
      },
      {
        stt: '16',
        cauhoi:
          'Theo quy định về trích lập dự phòng rủi ro tín dụng đối với các khoản cho vay bằng nguồn vốn ngân sách địa phương, tại thời điểm trích lập dự phòng rủi ro tín dụng, tỷ lệ nợ quá hạn và nợ khoanh thấp hơn 0,75% thì Quỹ dự phòng rủi ro tại ngày 31/12 hằng năm phải đảm bảo?',
        dapan1:
          'Tối đa bằng 0,75% tính trên số dư nợ cho vay không bao gồm nợ quá hạn và nợ khoanh',
        dapan2:
          'Không thấp hơn 0,75% tính trên số dư nợ cho vay không bao gồm nợ quá hạn và nợ khoanh',
        dapan3:
          'Tối thiểu bằng 0,25% tính trên số dư nợ cho vay không bao gồm nợ quá hạn và nợ khoanh',
        dapan4:
          'Bằng 0,15 % tính trên số dư nợ cho vay bao gồm nợ quá hạn và nợ khoanh.',
        ketqua: 'B',
      },
      {
        stt: '17',
        cauhoi:
          'Những khoản mục nào sau được cộng thu ngoại bảng khi xác định kết quả tài chính của đơn vị nhận khoán với Hội sở chính?',
        dapan1: 'Thu nhập do giảm chi phí chuyển sang',
        dapan2: 'Các khoản chi hộ trung ương; Chi lễ tân khánh tiết',
        dapan3: 'Phí điều hòa vốn',
        dapan4:
          'Phí huy động vốn theo chỉ tiêu kế hoạch Hội sở chính giao; Phí tồn ngân vốn ủy thác đầu tư tại đơn vị; các khoản cộng ngoại bảng khác (nếu có)',
        ketqua: 'D',
      },
      {
        stt: '18',
        cauhoi:
          'Đối tượng nào sau đây không được chi thù lao giảng viên, trợ giảng khi thực hiện các lớp đào tạo, bồi dưỡng nghiệp vụ do NHCSXH tổ chức?',
        dapan1:
          'Giảng viên là Uỷ viên Trung ương Đảng; Bộ trưởng, Bí thư tỉnh uỷ và các chức danh tương đương',
        dapan2: 'Giảng viên, báo cáo viên là cán bộ lãnh đạo NHCSXH cấp TW',
        dapan3:
          'Giảng viên và cán bộ quản lý lớp học là cán bộ viên chức, người lao động thuộc Trung tâm Đào tạo hoặc các Cơ sở đào tạo của NHCSXH',
        dapan4:
          'Giảng viên, báo cáo viên là cán bộ Hội sở chính NHCSXH; Trưởng phòng chi nhánh cấp tỉnh, Sở giao dịch, Trung tâm Công nghệ thông tin; Giám đốc Phòng giao dịch NHCSXH cấp huyện; cán bộ, công chức, viên chức không thuộc hệ thống NHCSXH đang công tác tại các cơ quan đơn vị ở cấp huyện',
        ketqua: 'C',
      },
      {
        stt: '19',
        cauhoi:
          'Chi phí giao dịch, đối ngoại, hội nghị, lễ tân, khánh tiết tại đơn vị, tổng các khoản chi này không vượt quá bao nhiêu % tổng chi phí của đơn vị?',
        dapan1: '3% tổng chi phí của đơn vị',
        dapan2: '15% tổng chi phí của đơn vị',
        dapan3: '10%tổng chi phí của đơn vị',
        dapan4: '5% tổng chi phí của đơn ',
        ketqua: 'D',
      },
      {
        stt: '20',
        cauhoi:
          'Theo quy định về thời gian tổ chức các cuộc hội nghị, thời gian tổ chức họp sơ kết, tổng kết chuyên đề tối đa không quá?',
        dapan1: '3 ngày ',
        dapan2: '2 ngày',
        dapan3: '1 ngày',
        dapan4: '5 ngày',
        ketqua: 'B',
      },
      {
        stt: '21',
        cauhoi: 'Tài khoản nào dưới đây KHÔNG phải là tài khoản Casa?',
        dapan1:
          'Tài khoản tiền gửi thanh toán, tiết kiệm không kỳ hạn của khách hàng mở tại NHCSXH',
        dapan2: 'Tài khoản tiền gửi của NHCSXH tại các TCTD khác ',
        dapan3:
          'Tài khoản theo dõi các khoản công nợ phải thu, phải trả, điều chuyển vốn với các đơn vị khác trong NHCSXH',
        dapan4: 'Tài khoản tiền gửi tiết kiệm có kỳ hạn của khách hàng ',
        ketqua: 'D',
      },
      {
        stt: '22',
        cauhoi: 'Các tài khoản GL được chia thành những loại nào sau đây?',
        dapan1:
          'Loại TK thuộc tài sản Nợ; Loại TK thuộc tài sản Có và loại TK thuộc tài sản Nợ - Có',
        dapan2:
          'Loại TK thuộc tài sản Có; Loại TK thuộc tài sản Nợ; Loại TK thu nhập - chi phí; Loại TK ngoại bảng và các Loại TK đối ứng ngoại bảng',
        dapan3:
          'Loại TK thuộc tài sản Có; Loại TK thuộc tài sản Nợ; Loại TK thuộc tài sản Nợ - Có; Loại TK thu nhập - chi phí',
        dapan4:
          'Loại TK thuộc tài sản Có; Loại TK thuộc tài sản Nợ; Loại TK thuộc tài sản Nợ - Có; Loại TK thu nhập - chi phí; Loại TK ngoại bảng và các TK đối ứng ngoại bảng ',
        ketqua: 'D',
      },
      {
        stt: '23',
        cauhoi:
          'Theo phương pháp tính lãi trong hoạt động nhận tiền gửi, cho vay tại NHCSXH đang áp dụng hiện nay, thời hạn tính lãi của các khoản vay, khoản tiền gửi được xác định như thế nào?',
        dapan1:
          'Được tính từ ngày giải ngân khoản vay hoặc nhận tiền gửi đến hết ngày liền kề trước ngày thanh toán hết khoản vay, khoản tiền gửi ',
        dapan2:
          'Được tính từ ngày giải ngân khoản vay hoặc nhận tiền gửi đến ngày thanh toán hết khoản vay, khoản tiền gửi',
        dapan3:
          'Được tính từ ngày liền kề sau ngày giải ngân khoản vay hoặc nhận tiền gửi đến hết ngày liền kề trước ngày thanh toán hết khoản vay, khoản tiền gửi',
        dapan4:
          'Được tính từ ngày liền kề sau ngày giải ngân khoản vay hoặc nhận tiền gửi đến ngày thanh toán hết khoản vay, khoản tiền gửi',
        ketqua: 'A',
      },
      {
        stt: '24',
        cauhoi:
          'Giấy tờ nào sau đây không thuộc Hồ sơ của Tổ TK&VV lưu tại Bộ phận Kế toán?',
        dapan1: 'Biên bản họp Tổ TK&VV (Mẫu 10/TD)',
        dapan2: 'Thông báo kết quả phê duyệt cho vay (Mẫu 04/TD) ',
        dapan3: 'Hợp đồng ủy nhiệm giữa NHCSXH với Tổ TK&VV (Mẫu 11/TD)',
        dapan4: 'Danh sách hộ gia đình đề nghị vay vốn (Mẫu 03/TD)',
        ketqua: 'B',
      },
      {
        stt: '25',
        cauhoi:
          'Trên hệ thống Intellect Online, cán bộ kế toán được thực hiện nghiệp vụ nào sau đây?',
        dapan1: ' Đăng ký thông tin học sinh sinh viên',
        dapan2: 'Đăng ký khoản vay',
        dapan3: 'Định lại lịch trả nợ',
        dapan4: 'Định lại lịch giải ngân',
        ketqua: 'C',
      },
      {
        stt: '26',
        cauhoi:
          'Theo Quy trình công việc trên hệ thống phần mềm ứng dụng Intellect, nội dung nào sau đây không thuộc trách nhiệm của Giao dịch viên?',
        dapan1:
          'Đối chiếu, đảm bảo khớp đúng nội dung giao dịch của chứng từ với Liệt kê giao dịch phát sinh, tài khoản sổ cái, sao kê chi tiết tài khoản do giao dịch viên nhập vào hệ thống trong ngày',
        dapan2:
          'Kiểm tra, kiểm soát Cân đối tài khoản kế toán và các báo cáo kế toán ',
        dapan3: 'Điều chuyển tiền từ quỹ giao dịch viên về Quỹ chính',
        dapan4:
          'Tập hợp, kiểm tra và giao đầy đủ chứng từ, báo cáo cho kế toán tổng hợp',
        ketqua: 'B',
      },
      {
        stt: '27',
        cauhoi:
          'Đối tượng nào sau đây không được trực tiếp mở tài khoản thanh toán tại NHCSXH?',
        dapan1:
          'Người từ đủ 18 tuổi trở lên có năng lực hành vi dân sự đầy đủ theo quy định của pháp luật Việt Nam',
        dapan2:
          'Người từ đủ 15 tuổi đến chưa đủ 18 tuổi không bị mất hoặc hạn chế năng lực hành vi dân sự, có tài sản riêng bảo đảm thực hiện nghĩa vụ trong việc mở tài khoản thanh toán',
        dapan3:
          'Tổ chức là pháp nhân, doanh nghiệp tư nhân, hộ kinh doanh cá thể, tổ chức chính trị xã hội, đoàn thể và các tổ chức khác',
        dapan4:
          'Người có khó khăn trong nhận thức, làm chủ hành vi theo quy định của pháp luật Việt Nam',
        ketqua: 'D',
      },
      {
        stt: '28',
        cauhoi:
          'Đối với khoản vay đã được NHCSXH nơi cho vay thông báo xóa nợ. Sau đó, người vay có điều kiện trả nợ số tiền lãi cho ngân hàng, thì NHCSXH hạch toán ghi Có vào tài khoản nào sau đây?',
        dapan1: 'Tài khoản Thu lãi cho vay',
        dapan2: 'Tài khoản thu khác',
        dapan3: 'Tài khoản phải trả Hội sở chính',
        dapan4: 'Tài khoản thu nhập bất thường',
        ketqua: 'A',
      },
      {
        stt: '29',
        cauhoi:
          'Việc hạch toán các khoản thu nhập trong năm của NHCSXH được thực hiện theo phương pháp nào sau đây? ',
        dapan1:
          'Hạch toán theo phương pháp thực thu. Riêng khoản thu lãi cho vay thực hiện theo phương pháp phải thu',
        dapan2:
          'Hạch toán theo phương pháp dồn tích, riêng khoản thu lãi cho vay thực hiện theo phương pháp thực thu',
        dapan3: 'Hạch toán theo phương pháp dồn tích',
        dapan4: 'Hạch toán theo phương pháp thực thu',
        ketqua: 'B',
      },
      {
        stt: '30',
        cauhoi:
          'Các Lệnh chuyển Nợ/Có nội bộ giữa các đơn vị trong hệ thống NHCSXH hiện nay được thực hiện tại chức năng nào?',
        dapan1: 'Chuyển tiền/Chuyển khoản',
        dapan2: 'Chuyển tiền/ Chuyển tiền nội bộ liên Pos',
        dapan3: 'Chuyển tiền trong nước đi/ Chuyển trực tiếp',
        dapan4: 'Chuyển tiền trong nước đi/Chuyển gián tiếp',
        ketqua: 'B',
      },
      {
        stt: '31',
        cauhoi:
          'Các khoản thu về bảo đảm dự thầu, bảo đảm thực hiện hợp đồng được hạch toán vào tài khoản nào sau đây?',
        dapan1: 'Tiền bảo hành mua sắm TSCĐ',
        dapan2: 'Các khoản phải trả nội bộ khác ',
        dapan3: 'Các khoản phải trả bên ngoài khác',
        dapan4: 'Các khoản phải trả khác về mua sắm TSCĐ',
        ketqua: 'C',
      },
      {
        stt: '32',
        cauhoi:
          'Chi nhánh NHCSXH A tổ chức mua sắm 02 máy photocopy qua hệ thống mạng đấu thầu quốc gia. Tại thời điểm mở thầu có 01 nhà thầu nộp Hồ sơ dự thầu. Chi nhánh NHCSXH A thực hiện theo trường hợp nào sau đây?',
        dapan1: 'Mở thầu ngay để tiến hành đánh giá Hồ sơ dự thầu đã nộp',
        dapan2:
          'Gia hạn thời điểm đóng thầu để tăng thêm số lượng nhà thầu nộp Hồ sơ dự thầu.',
        dapan3: 'Trình Người có thẩm quyền đơn vị quyết định xử lý.',
        dapan4: 'Hủy thầu',
        ketqua: 'A',
      },
      {
        stt: '33',
        cauhoi:
          'Phải thực hiện thẩm định nội dung nào sau đây đối với các gói thầu mua sắm tài sản, hàng hóa, dịch vụ thực hiện theo hình thức chỉ định thầu thông thường? ',
        dapan1: 'Kế hoạch lựa chọn nhà thầu, kết quả lựa chọn nhà thầu',
        dapan2:
          'Kế hoạch lựa chọn nhà thầu, dự thảo hợp đồng, kết quả lựa chọn nhà thầu',
        dapan3: 'Kế hoạch lựa chọn nhà thầu, dự thảo hợp đồng',
        dapan4: 'Dự thảo hợp đồng, kết quả lựa chọn nhà thầu',
        ketqua: 'A',
      },
      {
        stt: '34',
        cauhoi: 'Bảo đảm dự thầu áp dụng đối với trường hợp nào sau đây?',
        dapan1: 'Chào hàng cạnh tranh rút gọn',
        dapan2: 'Chào hàng cạnh tranh ',
        dapan3: 'Chỉ định thầu',
        dapan4: 'Mua sắm trực tiếp',
        ketqua: 'B',
      },
      {
        stt: '35',
        cauhoi:
          'Bảo đảm thực hiện hợp đồng không áp dụng đối với gói thầu nào sau đây?',
        dapan1: 'Gói thầu cung cấp tài sản, hàng hóa',
        dapan2: 'Gói thầu cung cấp hàng hóa',
        dapan3: 'Gói thầu cung cấp dịch vụ phi tư vấn',
        dapan4: 'Gói thầu cung cấp dịch vụ tư vấn',
        ketqua: 'D',
      },
      {
        stt: '36',
        cauhoi:
          'Trường hợp đơn vị nhận chuyển nhượng tài sản cố định hữu hình là nhà cửa, vật kiến trúc gắn liền với quyền sử dụng đất sau đó dỡ bỏ hoặc huỷ bỏ để xây dựng mới thì giá trị tài sản dỡ bỏ hoặc huỷ bỏ được xử lý hạch toán như thế nào?',
        dapan1: 'Thực hiện thanh lý tài sản cố định',
        dapan2: 'Xác định và ghi nhận là một tài sản cố định riêng',
        dapan3: 'Cộng vào giá trị quyết toán công trình đầu tư xây dựng mới',
        dapan4: 'Hạch toán chi phí phá dỡ, giải phóng mặt bằng',
        ketqua: 'A',
      },
      {
        stt: '37',
        cauhoi:
          'NHCSXH hạch toán nguyên giá tài sản theo giá trị nào sau đây khi nhận chuyển nhượng tài sản cố định đã sử dụng từ bên ngoài hệ thống NHCSXH và phải trả tiền?',
        dapan1:
          'Nguyên giá của tài sản đang theo dõi trên sổ sách đơn vị chuyển nhượng',
        dapan2: 'Giá chuyển nhượng phải trả',
        dapan3: 'Giá trị tài sản được NHCSXH đánh giá lại',
        dapan4: 'Giá trị còn lại trên sổ sách của đơn vị chuyển nhượng',
        ketqua: 'B',
      },
      {
        stt: '38',
        cauhoi:
          'Chi nhánh A xây dựng mới trụ sở làm việc hoàn thành đưa vào sử dụng ngày 30/11/2020, chi nhánh tạm phê duyệt quyết toán công trình và hạch toán tăng tài sản 6.500 triệu đồng. Ngày 01/4/2021, công trình được cấp có thẩm quyền phê duyệt quyết toán với giá trị 6.000 triệu đồng. Việc hạch toán số tiền chênh lệch giữa giá trị tạm quyết toán và quyết toán được thực hiện như thế nào?',
        dapan1: 'Trích tăng khấu hao trụ sở làm việc thêm 500 triệu đồng',
        dapan2:
          'Điều chỉnh giảm nguyên giá Tài sản cố định, giảm chi phí khấu hao đã trích 500 triệu đồng',
        dapan3:
          'Điều chỉnh giảm nguyên giá Tài sản cố định tương ứng số tiền 500 triệu đồng ',
        dapan4:
          'Không phải điều chỉnh nguyên giá Tài sản cố định và chi phí khấu hao đã trích',
        ketqua: 'C',
      },
      {
        stt: '39',
        cauhoi:
          'Thành viên Tổ thẩm định KHÔNG phải đáp ứng điều kiện nào sau đây?',
        dapan1: 'Có trình độ chuyên môn liên quan đến gói thầu',
        dapan2: 'Có chứng chỉ hành nghề đấu thầu',
        dapan3:
          'Có tối thiểu 03 năm công tác trong lĩnh vực liên quan đến công việc được phân công',
        dapan4:
          'Không trong thời gian bị cấm tham gia hoạt động đấu thầu theo quy định',
        ketqua: 'B',
      },
      {
        stt: '40',
        cauhoi:
          'Kinh phí đầu tư nâng cấp tài sản cố định không bao gồm nguồn nào?',
        dapan1:
          'Vốn đầu tư xây dựng cơ bản được Ngân sách Nhà nước Trung ương cấp',
        dapan2: 'Chi phí sửa chữa tài sản của NHCSXH',
        dapan3: 'Vốn đầu tư xây dựng cơ bản, mua sắm TSCĐ của NHCSXH',
        dapan4: 'Vốn đầu tư xây dựng cơ bản Ngân sách địa phương hỗ trợ',
        ketqua: 'B',
      },
    ],
  };
  constructor(private httpClient: HttpClient) {}
  getAll() {
    this.ketquathuc = [];
    this.httpClient
      .get(
        'https://daotao.vbsp.org.vn/nhcs.test.api/api/v1/TestRegistorUserTest/DoTestNew?id=' +
          this.id
      )
      .subscribe((res) => {
        const bien = res as any;
        if (bien && bien.data && bien.data.dataTest) {
          bien.data.dataTest.forEach(
            (ele: { question: { content: string } }, index: any) => {
              if (ele.question && ele.question.content) {
                this.dapAn.Sheet1.forEach((dapan, vitri) => {
                  if (String(dapan.cauhoi) === ele.question.content) {
                    this.ketquathuc.push({ cauSo: index, dapAn: dapan.ketqua });
                  }
                });
              }
            }
          );
        }
      });
  }
}
