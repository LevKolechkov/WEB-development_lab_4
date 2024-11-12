import copyImage from "../../assets/images/share/copy.svg";
import vkImage from "../../assets/images/share/vk.svg";
import tgImage from "../../assets/images/share/telegram.svg";
import waImage from "../../assets/images/share/whatsapp.svg";
import faImage from "../../assets/images/share/facebook.svg";

function Share({ show, onCancel }) {
  if (!show) return null;

  return (
    <div className="overlay" onClick={onCancel}>
      <div className="share">
        <button>
          <img src={copyImage} alt="copy" />
        </button>
        <button>
          <img src={vkImage} alt="vk" />
        </button>
        <button>
          <img src={tgImage} alt="telegram" />
        </button>
        <button>
          <img src={waImage} alt="whatsapp" />
        </button>
        <button>
          <img src={faImage} alt="facebook" />
        </button>
      </div>
    </div>
  );
}

export default Share;
