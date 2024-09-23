import React, { useState } from 'react';
import './form.css'; // CSS dosyasını ayrı bir yerde tutuyoruz

const Deneme = () => {
  const [selectedTooth, setSelectedTooth] = useState(null);
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Diş seçildiğinde modal açma ve diş numarasını kaydetme
  const handleToothClick = (toothNo) => {
    setSelectedTooth(toothNo);
    setCurrentComment(comments[toothNo] || '');
    setModalVisible(true);
  };

  // Yorum kaydetme işlemi
  const handleSaveComment = () => {
    if (currentComment.trim()) {
      setComments((prevComments) => ({
        ...prevComments,
        [selectedTooth]: currentComment,
      }));
      setModalVisible(false);
      setCurrentComment('');
    }
  };

  // Modalı kapatma işlemi
  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedTooth(null);
  };

  // Yorumları listeleme
  const renderComments = () => {
    return Object.entries(comments).map(([toothNo, comment]) => (
      <li key={toothNo}>
        <b>Diş {toothNo}:</b> {comment}
        <span className="delete-icon" onClick={() => handleDeleteComment(toothNo)}>×</span>
      </li>
    ));
  };

  // Yorum silme işlemi
  const handleDeleteComment = (toothNo) => {
    setComments((prevComments) => {
      const newComments = { ...prevComments };
      delete newComments[toothNo];
      return newComments;
    });
  };

  return (
    <section id="form" className="dis">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9 formContent">
            <div className="row">
              <div className="col-12 head">
                <h2>Diş Yorumlama</h2>
                <article>Lütfen yorumlamak istediğiniz dişin üzerine tıklayın.</article>
              </div>
              <div className="col-6">
                <div className="title">Yaptığınız yorumlar diş numarası ile burada görüntülenecektir.</div>
                <ul id="yorumlar">{renderComments()}</ul>
              </div>
              <div className="col-6 toggleContent">
                <img className="img-fluid" src="./img/dis.png" alt="Diş Görseli" style={{ width: '100%' }} />
                <div className="toggles">
                  {Array.from({ length: 32 }, (_, i) => {
                    const toothNo = i + 11;
                    return (
                      <div
                        key={toothNo}
                        className={`toggle ${comments[toothNo] ? 'active' : ''}`}
                        data-no={toothNo}
                        onClick={() => handleToothClick(toothNo)}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div id="overlay" onClick={handleCloseModal}>
          <div id="bubble" onClick={(e) => e.stopPropagation()}>
            <div className="dialog">
              <h3>Diş <span id="dis-no">{selectedTooth}</span> için yorum</h3>
              <textarea
                id="yorum"
                cols="30"
                rows="5"
                value={currentComment}
                onChange={(e) => setCurrentComment(e.target.value)}
              ></textarea>
              <br />
              <button className="button" onClick={handleSaveComment}>
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Deneme;
