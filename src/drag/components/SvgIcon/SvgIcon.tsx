import { useState, useEffect, ComponentType, SVGProps } from "react";
import { SvgIconProps } from "./SvgIcon.type";

// 아이콘 캐시를 저장할 객체
const iconCache: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {};

const SvgIcon = ({ name, size = 24, ...props }: SvgIconProps) => {
  const [Icon, setIcon] = useState<ComponentType<
    SVGProps<SVGSVGElement>
  > | null>(() => iconCache[name] || null);

  useEffect(() => {
    if (Icon) return;

    const importIcon = async () => {
      if (iconCache[name]) {
        setIcon(() => iconCache[name]);
        return;
      }

      try {
        const imported = await import(`@assets/icons/${name}.svg?react`);
        if (imported.default && typeof imported.default === "function") {
          iconCache[name] = imported.default;
          setIcon(() => imported.default);
        } else {
          console.error(`Invalid SVG component for: ${name}`);
        }
      } catch (err) {
        console.error(`Error importing icon: ${name}`, err);
      }
    };

    importIcon();
  }, [name, Icon]);

  if (!Icon) {
    return null;
  }

  return <Icon {...props} width={size} height={size} />;
};

export { SvgIcon };
