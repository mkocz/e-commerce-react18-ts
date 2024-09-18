import { IconType } from 'react-icons';

type Props = {
    Icon: IconType,
    textLines: string[]
}

export const FooterBlock = ({ Icon, textLines }: Props) => {
  return (
    <div className="flex flex-col items-center cursor-default">
      <Icon className="mb-2 text-xl text-lime-500" />
      {textLines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  );
};