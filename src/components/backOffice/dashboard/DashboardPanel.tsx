import {
  Card,
  CardContent,
} from '@/components/backOffice/dashboard/DashboardCard';

const DashboardPanel = () => {
  return (
    <div className="space-y-6">
      {/* 상단 요약 정보 */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">총 와인 수</div>
            <div className="text-xl font-semibold">120개</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">총 주문 수</div>
            <div className="text-xl font-semibold">58건</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">판매 완료</div>
            <div className="text-xl font-semibold">41건</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">회원 수</div>
            <div className="text-xl font-semibold">35명</div>
          </CardContent>
        </Card>
      </div>

      {/* 최근 주문 목록 */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-lg font-semibold mb-4">최근 주문</h2>
        <div className="text-sm text-gray-500">준비 중...</div>
      </div>

      {/* 재고 부족 알림 */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-lg font-semibold mb-4">재고 부족 와인</h2>
        <div className="text-sm text-gray-500">준비 중...</div>
      </div>
    </div>
  );
};

export default DashboardPanel;
