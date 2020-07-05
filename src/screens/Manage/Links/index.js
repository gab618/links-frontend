import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { linkList } from '../../../actions/LinkActions';

import Layout from '../../Layouts/Manage/index';

function Links({ links, linkList }) {
  useEffect(() => {
    linkList();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Links</h1>
        </div>
        <div className="col text-right align-self-bottom pt-2">
          <Link to="/manage/links/create" className="btn btn-primary">
            Add
          </Link>
        </div>
      </div>

      {links && links.length
        ? links.map((l) => (
            <div className="pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between">
              <div className="pr-3">
                <img src="https://via.placeholder.com/100" alt="Link icon" />
              </div>
              <div className="align-self-center">
                <span className="text-primary clearfix">{l.label}</span>
                <span className="text-primary clearfix">{l.url}</span>
              </div>
              <div className="ml-auto p-2 clearfix">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </div>
          ))
        : null}
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return { links: state.link.links };
};

export default connect(mapStateToProps, { linkList })(Links);
