import copyImage from "../../assets/images/share/copy.svg";
import vkImage from "../../assets/images/share/vk.svg";
import tgImage from "../../assets/images/share/telegram.svg";
import waImage from "../../assets/images/share/whatsapp.svg";
import faImage from "../../assets/images/share/facebook.svg";

const images = [copyImage, vkImage, tgImage, waImage, faImage];

function Share({ show, onCancel }) {
  if (!show) return null;

  return (
    <div className="overlay" onClick={onCancel}>
      <div className="share">
        {images.map((image) => {
          return (
            <button>
              <img src={image} alt="img" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Share;
