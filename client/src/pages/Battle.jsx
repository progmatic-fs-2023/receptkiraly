import BattleCard from '../components/BattleCard';

function Battle() {
  return (
    <div className="flex flex-col items-center gap-4">
      <BattleCard battleId={1} />
      <BattleCard battleId={2} />
      <BattleCard battleId={3} />
      <BattleCard battleId={4} />
    </div>
  );
}
export default Battle;
