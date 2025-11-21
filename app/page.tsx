export default function Home() {
  return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3 col-xl-2 d-none d-lg-block">
              <div className="filter">
                <div className="filter-title">
                  <h5>Фильтр</h5>
                </div>
                <div className="filter-price">
                  <div className="filter-price_title">
                    Цена
                  </div>
                  <form>
                    <div className="filter-price_range">
                      <div className="filter-price_input-wrapper">
                        <label htmlFor="min" className="filter-price_label">от</label>
                        <input id="min" className="filter-price_input" />
                      </div>
                      <div className="filter-price_input-wrapper">
                        <label htmlFor="max" className="filter-price_label">до</label>
                        <input id="max" className="filter-price_input" /></div>
                    </div>
                  </form>
                </div>
                <div className="filter-check">
                  <label className="filter-check_label">
                    <input type="checkbox" className="filter-check_checkbox" id="discount-checkbox" />
                      <span className="filter-check_checkmark"></span>
                      <span className="filter-check_label-text">Акция</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9 col-xl-10">
              <div className="container">
                <div className="row no-gutters goods">
                  {/* <!-- КАРТОЧКИ ТОВАРОВ --> */}
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">33990 ₽</div>
                        <h5 className="card-title">Игровая приставка Sony PlayStation 4 Pro</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-sale">🔥Hot Sale🔥</div>
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">16499 ₽</div>
                        <h5 className="card-title">Игровая приставка Sony PlayStation 3 Super Slim</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">39990 ₽</div>
                        <h5 className="card-title">Игровая приставка Xbox One X</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-sale">🔥Hot Sale🔥</div>
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">23411 ₽</div>
                        <h5 className="card-title">Игровая приставка Xbox One S</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">24751 ₽</div>
                        <h5 className="card-title">Игровая приставка Nintendo Switch</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-sale">🔥Hot Sale🔥</div>
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">3624 ₽</div>
                        <h5 className="card-title">Игровая приставка Sega Retro Genesis HD</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-sale">🔥Hot Sale🔥</div>
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">1551 ₽</div>
                        <h5 className="card-title">Игровая приставка Dendy Junior</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="card">
                      <div className="card-img-wrapper">
                        <span className="card-img-top"></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">10445 ₽</div>
                        <h5 className="card-title">Игровая приставка Sony PlayStation classNameic</h5>
                        <button className="btn btn-primary">В корзину</button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END КАРТОЧКИ ТОВАРОВ --> */}
                </div>
              </div>

            </div>
          </div>
        </div>


      </main>

  );
}
