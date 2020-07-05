import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { getFormData } from '../../../../helpers/form';
import { linkCreate } from '../../../../actions/LinkActions';

import Layout from '../../../Layouts/Manage';

function Create({ link, linkCreate }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkCreate(data);
  };

  if (link) {
    return <Redirect to="/manage/links" />;
  }

  return (
    <Layout>
      <h1>Create Link</h1>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="">Label</label>
            <input name="label" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Url</label>
            <input name="url" type="text" className="form-control" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign" />
              Is Social
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-round">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return { link: state.link.link };
};

export default connect(mapStateToProps, { linkCreate })(Create);
